import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VisualizarDocComponent } from "./visualizar-doc/visualizar-doc.component";

const routes: Routes = [
  {path: '', component: VisualizarDocComponent, data: { title: 'Visualizar Documentos' }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarDocumentosRoutingModule {}