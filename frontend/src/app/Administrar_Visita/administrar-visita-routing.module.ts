import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdministrarVisitaComponent } from './administrar-visita.component';
import { RegistrarVisitaComponent } from './Registrar Visita/registrar-visita.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrarVisitaComponent,
    data: {
      title: 'Administrar Visita'
    }
  },
  {
    path: 'nuevo',
    component: RegistrarVisitaComponent
  },
  {
    path: 'editar/:id',
    component: RegistrarVisitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarVisitaRoutingModule {}
