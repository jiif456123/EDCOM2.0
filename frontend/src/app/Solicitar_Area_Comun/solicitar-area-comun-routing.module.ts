import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SolicitarAreaComponent } from './solicitar-area/solicitar-area.component';

const routes: Routes = [
  {
    path: "",component:SolicitarAreaComponent, data:{title: 'Solicitar area comun'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarAreaComunRoutingModule {}