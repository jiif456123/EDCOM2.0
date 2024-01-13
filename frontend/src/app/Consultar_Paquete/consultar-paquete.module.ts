import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { ConsultarPaqueteRoutingModule } from './consultar-paquete-routing.module';
import { ConsultarPaqueteComponent } from './consultar-paquete.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  imports: [CommonModule, ConsultarPaqueteRoutingModule, NgbModule, ChartsModule, FilterPipeModule, FormsModule, ReactiveFormsModule, Ng2FilterPipeModule],
  exports: [ConsultarPaqueteComponent],
  declarations: [ConsultarPaqueteComponent],
  providers: [],
})
export class ConsultarPaqueteModule {}
