import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarPresupuestoRoutingModule } from './gestionar-presupuesto-routing.module';
import { GestionarPresupuestoComponent } from './gestionar-presupuesto.component';
import { RegistrarPresupuestoComponent } from './RegistrarPresupuesto/registrar-presupuesto.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from 'ngx-filter-pipe';

@NgModule({
  imports: [CommonModule, GestionarPresupuestoRoutingModule, NgbModule, ChartsModule, FilterPipeModule, FormsModule, ReactiveFormsModule, Ng2FilterPipeModule],
  exports: [GestionarPresupuestoComponent],
  declarations: [GestionarPresupuestoComponent, RegistrarPresupuestoComponent],
  providers: [],
})
export class GestionarPresupuestoModule {}
