import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResiComponent } from './consultar-residente-moroso.component';

const routes: Routes = [
  {
    path: '',
    component: ResiComponent,
    data: {
      title: 'Residente Moroso'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarResidenteMorosoRoutingModule {}
