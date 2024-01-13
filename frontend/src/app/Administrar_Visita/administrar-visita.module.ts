import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { AdministrarVisitaRoutingModule } from './administrar-visita-routing.module';
import { AdministrarVisitaComponent } from './administrar-visita.component';
import { RegistrarVisitaComponent } from './Registrar Visita/registrar-visita.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AdministrarVisitaRoutingModule, NgbModule, ChartsModule, FormsModule, ReactiveFormsModule],
  exports: [AdministrarVisitaComponent],
  declarations: [AdministrarVisitaComponent, RegistrarVisitaComponent],
  providers: [],
})
export class AdministrarVisitaModule {}
