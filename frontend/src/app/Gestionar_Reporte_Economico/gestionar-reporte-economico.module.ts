import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarReporteEconomicoRoutingModule } from './gestionar-reporte-economico-routing.module';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'ngx-filter-pipe';
import { GestionarReporteEconomicoComponent } from './gestionar-reporte-economico.component';
import { RegistrarEgresosComponent } from './RegistrarEgresos/registrar-egresos.component';
import { RegistrarIngresosComponent } from './RegistrarIngresos/registrar-ingresos.component';

@NgModule({
  imports: [CommonModule, GestionarReporteEconomicoRoutingModule, NgbModule, ChartsModule, FilterPipeModule, FormsModule, ReactiveFormsModule, Ng2FilterPipeModule],
  exports: [GestionarReporteEconomicoComponent],
  declarations: [GestionarReporteEconomicoComponent, RegistrarEgresosComponent, RegistrarIngresosComponent],
  providers: [],
})
export class GestionarReporteEconomicoModule {}
