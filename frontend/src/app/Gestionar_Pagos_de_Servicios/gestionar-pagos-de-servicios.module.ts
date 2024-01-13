import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarPagosdeServiciosRoutingModule } from './gestionar-pagos-de-servicios-routing.module';
import { GestionarPagoComponent } from './gestionar-pagos-de-servicios.component';

@NgModule({
  imports: [CommonModule, GestionarPagosdeServiciosRoutingModule, NgbModule, ChartsModule],
  exports: [GestionarPagoComponent],
  declarations: [GestionarPagoComponent],
  providers: [],
})
export class GestionarPagosdeServiciosModule {}
