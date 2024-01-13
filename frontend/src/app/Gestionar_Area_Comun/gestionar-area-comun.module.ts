import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { GestionarAreaComunRoutingModule } from './gestionar-area-comun-routing.module';
import { GestionarAreaComponent } from './gestionar-area/gestionar-area.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [CommonModule, GestionarAreaComunRoutingModule, NgbModule, ChartsModule, FilterPipeModule, FormsModule, Ng2SearchPipeModule],
  exports: [],
  declarations: [GestionarAreaComponent],
  providers: [],
})
export class GestionarAreaComunModule {}
