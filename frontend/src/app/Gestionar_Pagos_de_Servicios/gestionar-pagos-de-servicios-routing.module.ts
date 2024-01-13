import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GestionarPagoComponent } from './gestionar-pagos-de-servicios.component';

const routes: Routes = [
  {
    path: '',
    component: GestionarPagoComponent,
    data: {
      title: 'Registrar Pago'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarPagosdeServiciosRoutingModule {}
