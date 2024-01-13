import { Component, OnInit } from "@angular/core";
import { Chat } from 'src/app/models/chat.model';
import { User } from 'src/app/models/user.model';
import { ChatService } from 'src/app/services/chat/chat.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { SidebarService } from "../sidebar/sidebar.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  usuario: User;

  rol: string;
  idUser: string;
  lConversacion: Chat[];
  
  constructor(
    public sidebarservice: SidebarService,
    private usuarioService: UsuarioService,
    private chatService: ChatService) {}

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());

      if ($("#wrapper").hasClass("nav-collapsed")) {
          // unpin sidebar when hovered
          $("#wrapper").removeClass("nav-collapsed");
          $("#sidebar-wrapper").unbind( "hover");
      } else {
          $("#wrapper").addClass("nav-collapsed");
          $("#sidebar-wrapper").hover(
              function () {
                  $("#wrapper").addClass("sidebar-hovered");
              },
              function () {
                  $("#wrapper").removeClass("sidebar-hovered");
              }
          )
    
      }

  }

  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }

  hideSidebar() {
    this.sidebarservice.setSidebarState(true);
  }

  cerrarSesion(){
    this.usuarioService.logout();
  }
  ngOnInit() {
    this.usuario =  JSON.parse(localStorage.getItem('usuario'));
    this.rol = JSON.parse(localStorage.getItem('rol'));
    this.idUser = localStorage.getItem('id');
    if (this.rol == 'RESIDENTE') {
      this.chatService.listar_para_user(this.idUser).subscribe(data => {
        this.lConversacion = data.data;
      })

    } else {
      this.chatService.listar_para_admin(this.idUser).subscribe(data => {
        this.lConversacion = data.data;
      })
    }

  

  }
}
