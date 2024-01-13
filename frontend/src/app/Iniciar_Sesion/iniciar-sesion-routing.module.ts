import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CambiarContrasenaComponent } from "./cambiar-contrasena/cambiar-contrasena.component";
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RecuperarContrasenaComponent } from "./recuperar-contrasena/recuperar-contrasena.component";

const routes: Routes = [

  { path: '', component: IniciarSesionComponent, data: { title: 'Iniciar Sesion' } },
  { path: 'cambiocontrasena', component: CambiarContrasenaComponent, data: { title: 'Cambiar contraseña' } },
  { path: 'recuperarcontrasena/:id', component: RecuperarContrasenaComponent, data: { title: 'Recuperar contraseña' } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarSesionRoutingModule { }