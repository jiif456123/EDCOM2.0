import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarDocumentosRoutingModule } from './gestionar-documentos-routing.module';
import { GestionarDocsComponent } from './gestionar-docs/gestionar-docs.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  imports: [CommonModule, GestionarDocumentosRoutingModule, NgbModule, ChartsModule, FormsModule, ReactiveFormsModule,Ng2SearchPipeModule,NgxFileDropModule],
  exports: [],
  declarations: [GestionarDocsComponent],
  providers: [],
})
export class GestionarDocumentosModule {}
