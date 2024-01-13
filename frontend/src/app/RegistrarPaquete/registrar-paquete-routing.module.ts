import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistroPaqueteComponent} from './registrar-paquete.component';
import { PaqueteRegistradoComponent } from './PaqueteRegistrado/paquete-registrado.component';

const routes: Routes = [
  {
    path: '',
    component: RegistroPaqueteComponent,
    data: {
      title: 'Registrar Paquete'
    }
  },
  {
    path: 'nuevo',
    component: PaqueteRegistradoComponent
  },
  {
    path: 'editar/:id',
    component: PaqueteRegistradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarPaqueteRoutingModule {}