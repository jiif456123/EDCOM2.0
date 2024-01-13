import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

export class SocketService {
    private url = environment.endpoint;
    private socket;    

    constructor() {
        this.socket = io(this.url);
    }

    sendMessage(message){
        this.socket.emit('message', message);
    }

    joinRoom(room){
        this.socket.emit('join', room)        
    }

    leaveRoom(room){
        this.socket.emit('disconnecting', room)        
    }

    public getMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('new message', (message) => {
                observer.next(message);
            });
        });
    }
}