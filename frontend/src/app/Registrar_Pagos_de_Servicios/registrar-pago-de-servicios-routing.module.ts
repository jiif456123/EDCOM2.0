import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrarPagoComponent } from './registrar-pago-de-servicios.component';
import { RegistroComponent } from './Registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPagoComponent,
    data: {
      title: 'Registrar Pago'
    }
  },
  {
    path: 'nuevo',
    component: RegistroComponent
  },
  {
    path: 'editar/:id',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistrarPagodeServiciosRoutingModule {}
