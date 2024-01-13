import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { ResgistrarPagodeServiciosRoutingModule } from './registrar-pago-de-servicios-routing.module';
import { RegistrarPagoComponent } from './registrar-pago-de-servicios.component';
import { RegistroComponent } from './Registro/registro.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ResgistrarPagodeServiciosRoutingModule, NgbModule, ChartsModule, FilterPipeModule, FormsModule, ReactiveFormsModule, Ng2FilterPipeModule],
  exports: [RegistrarPagoComponent],
  declarations: [RegistrarPagoComponent,RegistroComponent],
  providers: [DatePipe],
})
export class RegistrarPagodeServiciosModule {}
