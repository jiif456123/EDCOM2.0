import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GestionarDocsComponent } from "./gestionar-docs/gestionar-docs.component";

const routes: Routes = [
  {path: '', component: GestionarDocsComponent, data: { title: 'Gestionar Documentos' }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarDocumentosRoutingModule {}