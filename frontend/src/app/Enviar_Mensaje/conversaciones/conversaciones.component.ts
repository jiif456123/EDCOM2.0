import { Component, OnInit, Injectable, Inject, ElementRef, ViewChild, ViewChildren, Input } from '@angular/core';
import { Chat } from 'src/app/models/chat.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from 'src/app/services/chat/chat.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { User } from 'src/app/models/user.model';
import { ChatComponent } from '../chat/chat.component';

declare var $: any;


@Component({
  selector: 'app-conversaciones',
  templateUrl: './conversaciones.component.html',
  styleUrls: ['./conversaciones.component.scss']
})
export class ConversacionesComponent implements OnInit {

  pOpcion = 0;
  lChat: Chat[];
  closeResult;
  rol: string;
  idUser: string;
  lConversacion: Chat[];
  vchatSeleccionado: Chat;
  lUser: User[];

  @ViewChild(ChatComponent, {static: false}) childRef: ChatComponent;

  filtro1;
  filtro2;
  constructor(
    private modalService: NgbModal,
    private chatService: ChatService,
    private userService: UsuarioService
  ) { }

  ngOnInit(): void {

    this.rol = JSON.parse(localStorage.getItem('rol'));
    this.idUser = localStorage.getItem('id');
    if (this.rol == 'RESIDENTE') {
      this.chatService.listar_para_user(this.idUser).subscribe(data => {
        this.lConversacion = data.data;
        this.userService.listarAdmin().subscribe(data => {
          this.lUser = data.data
          this.lConversacion.forEach(item => {
            this.lUser = this.lUser.filter(user => item.admin._id != user._id)
          })
        })
      })

    } else {
      this.chatService.listar_para_admin(this.idUser).subscribe(data => {
        this.lConversacion = data.data;
        this.userService.listarResidente().subscribe(data => {
          this.lUser = data.data
          this.lConversacion.forEach(item => {
            this.lUser = this.lUser.filter(user => item.user._id != user._id)
          })
        })
      })
    }
  }

  fnAbrirModal(content) {
    this.modalService.open(content);
  }

  seleccionarChat(p: Chat) {
    this.pOpcion = 1;
    this.vchatSeleccionado = p;

  }

  anadirChat(p: User) {
    if (this.rol == 'RESIDENTE') {
      let query = {
        admin: p._id,
        user: this.idUser
      }
      this.chatService.guardar(query).subscribe(data => {
        this.chatService.listar_para_user(this.idUser).subscribe(data => {
          this.lConversacion = data.data;
          this.userService.listarAdmin().subscribe(data => {
            this.lUser = data.data
            this.lConversacion.forEach(item => {
              this.lUser = this.lUser.filter(user => item.admin._id != user._id)
            })
          })
        })
      })
    } else {
      let query = {
        admin: this.idUser,
        user: p._id,
      }
      this.chatService.guardar(query).subscribe(data => {
        this.chatService.listar_para_admin(this.idUser).subscribe(data => {
          this.lConversacion = data.data;
          this.userService.listarResidente().subscribe(data => {
            this.lUser = data.data
            this.lConversacion.forEach(item => {
              this.lUser = this.lUser.filter(user => item.user._id != user._id)
            })
          })
        })
      })
    }
  }

}
