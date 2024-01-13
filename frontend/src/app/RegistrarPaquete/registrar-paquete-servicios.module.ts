import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { RegistrarPaqueteRoutingModule } from './registrar-paquete-routing.module';
import { RegistroPaqueteComponent } from './registrar-paquete.component';
import { PaqueteRegistradoComponent } from './PaqueteRegistrado/paquete-registrado.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@NgModule({
  imports: [CommonModule, RegistrarPaqueteRoutingModule, NgbModule, ChartsModule , FormsModule, ReactiveFormsModule , FilterPipeModule, Ng2FilterPipeModule],
  exports: [RegistroPaqueteComponent],
  declarations: [RegistroPaqueteComponent, PaqueteRegistradoComponent],
  providers: [],
})
export class RegistrarPaqueteModule {}