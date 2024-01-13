import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConsultarVisitaComponent } from './consultar-visita.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultarVisitaComponent,
    data: {
      title: 'Consulta Visita'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarVisitaRoutingModule {}
