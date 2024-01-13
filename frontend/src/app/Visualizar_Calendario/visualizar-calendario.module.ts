import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartsModule } from "ng2-charts";
import { VisualizarCalendarioRoutingModule } from './visualizar-calendario-routing.module';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/daygrid';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [CommonModule, VisualizarCalendarioRoutingModule, NgbModule, ChartsModule, FullCalendarModule ],
  exports: [],
  declarations: [CalendarioComponent],
  providers: [],
})
export class VisualizarCalendarioModule {}





