import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { IniciarSesionRoutingModule } from './iniciar-sesion-routing.module';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketService } from '../services/socket/socket.service';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';

@NgModule({
  imports: [
    CommonModule,
    IniciarSesionRoutingModule,
    NgbModule,
    ChartsModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [],
  declarations: [IniciarSesionComponent, CambiarContrasenaComponent, RecuperarContrasenaComponent],
  providers: [SocketService],
})
export class IniciarSesionModule { }
