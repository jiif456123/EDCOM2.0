import { Chat } from './chat.model';
import { User } from './user.model';

export class Message{
    _id:string;
    name: string;
    sendBy: User;
    chat: Chat;
    timeStamp: Date;
}