import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { VisualizarDocumentosRoutingModule } from './visualizar-documentos-routing.module';
import { VisualizarDocComponent } from './visualizar-doc/visualizar-doc.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  imports: [CommonModule, VisualizarDocumentosRoutingModule,NgbModule, ChartsModule, FormsModule, ReactiveFormsModule, Ng2SearchPipeModule],
  exports: [],
  declarations: [VisualizarDocComponent],
  providers: [],
})
export class VisualizarDocumentosModule {}

