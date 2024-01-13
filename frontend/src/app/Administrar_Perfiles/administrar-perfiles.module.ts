import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { AdministrarPerfilesRoutingModule } from './administrar-perfiles-routing.module';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  imports: [CommonModule, AdministrarPerfilesRoutingModule, NgbModule, ChartsModule, FormsModule, ReactiveFormsModule, Ng2SearchPipeModule],
  exports: [],
  declarations: [PerfilesComponent],
  providers: [FormsModule],
})
export class AdministrarPerfilesModule {}
