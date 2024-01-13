import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { PublicarDocumentosRoutingModule } from './publicar-documentos-routing.module';
import { PublicarDocumentoComponent } from './publicar-documento/publicar-documento.component';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [CommonModule, PublicarDocumentosRoutingModule, NgbModule, ChartsModule, FormsModule, ReactiveFormsModule, Ng2SearchPipeModule],
  exports: [],
  declarations: [PublicarDocumentoComponent],
  providers: [],
})
export class PublicarDocumentosModule { }