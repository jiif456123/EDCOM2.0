import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConversacionesComponent } from './conversaciones/conversaciones.component';

const routes: Routes = [
  {path: '', component: ConversacionesComponent, data: { title: 'Chat' }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarMensajeRoutingModule {}
