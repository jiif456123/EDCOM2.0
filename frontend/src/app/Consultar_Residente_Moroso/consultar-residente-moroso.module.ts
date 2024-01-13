import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { ConsultarResidenteMorosoRoutingModule } from './consultar-residente-moroso-routing.module';
import { ResiComponent } from './consultar-residente-moroso.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ConsultarResidenteMorosoRoutingModule, NgbModule, ChartsModule, FilterPipeModule, FormsModule, ReactiveFormsModule, Ng2FilterPipeModule],
  exports: [ResiComponent],
  declarations: [ResiComponent],
  providers: [],
})
export class ConsultarResidenteMorosoModule {}
