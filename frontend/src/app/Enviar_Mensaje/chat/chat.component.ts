import { AfterViewChecked, Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message/message.service';
import { SocketService } from 'src/app/services/socket/socket.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked, OnChanges {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  message: string;
  @Input() chatSeleccionado: Chat;
  //chatSeleccionado: Chat = { _id: '5fa1f6d0c45b34f40d128d3d', admin: null, user: null, lastMessage: '' }
  lmensajes: Message[] = [];
  ultimoMensaje: Message;
  idUser;
  rol: string;
  constructor(
    private socketService: SocketService,
    private messageService: MessageService,
  ) { }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnChanges(changes: SimpleChanges) {

    var chatAnterior = (changes.chatSeleccionado.previousValue);
    if (chatAnterior != null) {
      this.socketService.leaveRoom(chatAnterior._id);
    }

    var chat = (changes.chatSeleccionado.currentValue);
    if (chat != null) {

      this.messageService.listbyChat(chat._id).subscribe(data => {
        this.lmensajes = data.data
        this.scrollToBottom();
      })
      this.socketService.joinRoom({
        room: chat._id
      })

      this.socketService
        .getMessages()
        .subscribe((data: any) => {
          if (this.ultimoMensaje == null) {
            this.ultimoMensaje = data.data;
            this.lmensajes = this.lmensajes.concat({
              name: data.data.name,
              sendBy: data.data.sendBy,
              chat: data.data.chat,
              _id: data.data._id,
              timeStamp: data.data.timeStamp
            });
          }
          if (this.ultimoMensaje._id != data.data._id) {
            this.lmensajes = this.lmensajes.concat({
              name: data.data.name,
              sendBy: data.data.sendBy,
              chat: data.data.chat,
              _id: data.data._id,
              timeStamp: data.data.timeStamp
            });
            this.scrollToBottom();
            this.ultimoMensaje = data.data;
          }
        });
    }
  }

  ngOnInit(): void {
    this.lmensajes = [];
    this.rol = JSON.parse(localStorage.getItem('rol'));

    this.idUser = localStorage.getItem('id');
  }

  ngOnDestroy(): void {
  }

  salirChat() {
    this.socketService.leaveRoom(this.chatSeleccionado._id);
  }

  sendMessage() {
    if (this.message == '') {
      return;
    }

    let mensaje = {
      name: this.message,
      sendBy: this.idUser,
      chat: this.chatSeleccionado._id
    }

    this.messageService.save(mensaje).subscribe(data => {
      if (data.ok == false) {
        swal('Error', 'Revise su conexion a internet', 'error')
      } else {
        this.socketService.sendMessage({
          message: data.data,
          room: this.chatSeleccionado._id
        });
      }
    });
    this.message = '';
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}
