import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { CambiarContraseñaRoutingModule } from './cambiar-contraseña-routing.module';


@NgModule({
  imports: [CommonModule, CambiarContraseñaRoutingModule, NgbModule, ChartsModule],
  exports: [],
  declarations: [],
  providers: [],
})
export class CambiarContraseñaModule {}
