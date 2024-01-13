import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GestionarReporteEconomicoComponent } from './gestionar-reporte-economico.component';
import { RegistrarEgresosComponent } from './RegistrarEgresos/registrar-egresos.component';
import { RegistrarIngresosComponent } from './RegistrarIngresos/registrar-ingresos.component';

const routes: Routes = [
  {
    path: '',
    component: GestionarReporteEconomicoComponent,
    data: {
      title: 'Gestionar Reporte Economico'
    }
  },
  {
    path: 'nuevoE',
    component: RegistrarEgresosComponent
  },
  {
    path: 'editarE/:id',
    component: RegistrarEgresosComponent
  },
  {
    path: 'nuevoI',
    component: RegistrarIngresosComponent
  },
  {
    path: 'editarI/:id',
    component: RegistrarIngresosComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarReporteEconomicoRoutingModule {}
