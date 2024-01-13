import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GestionarAreaComponent } from './gestionar-area/gestionar-area.component';

const routes: Routes = [
  {
    path: '', component: GestionarAreaComponent, data: { title: 'Gestionar area comun' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarAreaComunRoutingModule { }