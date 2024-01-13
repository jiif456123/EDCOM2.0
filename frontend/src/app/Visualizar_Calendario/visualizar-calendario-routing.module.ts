import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {
    path: "", component: CalendarioComponent, data: { title: 'Chat' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarCalendarioRoutingModule { }