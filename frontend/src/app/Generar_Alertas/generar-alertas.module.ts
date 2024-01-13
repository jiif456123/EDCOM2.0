import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GenerarAlertasRoutingModule } from './generar-alertas-routing.module';

@NgModule({
  imports: [CommonModule, GenerarAlertasRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class GenerarAlertasModule {}
