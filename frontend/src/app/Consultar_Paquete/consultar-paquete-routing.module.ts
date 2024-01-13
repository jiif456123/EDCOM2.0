import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultarPaqueteComponent } from './consultar-paquete.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarPaqueteComponent,
    data: {
      title: 'Consultar Paquete'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarPaqueteRoutingModule {}
