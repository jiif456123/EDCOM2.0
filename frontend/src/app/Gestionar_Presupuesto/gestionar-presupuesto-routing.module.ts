import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GestionarPresupuestoComponent } from './gestionar-presupuesto.component';
import { Ng2SearchPipe } from 'ng2-search-filter';
import { RegistrarPresupuestoComponent } from './RegistrarPresupuesto/registrar-presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: GestionarPresupuestoComponent,
    data: {
      title: 'Gestionar Presupuesto'
    }
  },
  {
    path: 'nuevo',
    component: RegistrarPresupuestoComponent
  },
  {
    path: 'editar/:id',
    component: RegistrarPresupuestoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarPresupuestoRoutingModule {}
