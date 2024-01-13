import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MostrarDatosComponent } from './mostrar-datos.component';
const routes: Routes = [
  {
    path: '',
     component: MostrarDatosComponent,
    data: {
      title: 'Mostrar Datos'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MostrarDatosRoutingModule { }
