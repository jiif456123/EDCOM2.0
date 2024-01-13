import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublicarDocumentoComponent } from "./publicar-documento/publicar-documento.component";

const routes: Routes = [
  {path: '', component: PublicarDocumentoComponent, data: { title: 'Publica Documentos' }}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarDocumentosRoutingModule {}