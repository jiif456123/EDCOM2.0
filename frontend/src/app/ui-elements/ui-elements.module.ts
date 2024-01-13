import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { TagInputModule } from 'ngx-chips';

import { UIElementsRoutingModule } from "./ui-elements-routing.module";

import { ToastrComponent } from './toastr/toastr.component';
import { SwitchComponent } from './switch/switch.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { GridLayoutsComponent } from '../components/grid-layouts/grid-layouts.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { TagInputComponent } from './tag-input/tag-input.component';
import { WidgetsComponent } from './widgets/widgets.component';



@NgModule({
    imports: [
        CommonModule,
        UIElementsRoutingModule,
        NgbModule, 
        UiSwitchModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TagInputModule
    ],
    declarations: [
        ToastrComponent,
        SwitchComponent,
        SweetAlertsComponent,
        VerticalTimelineComponent,
        HorizontalTimelineComponent,
        GridLayoutsComponent,
        PricingTableComponent,
        ColorPaletteComponent,
        TagInputComponent,
        WidgetsComponent
    ],
    
})
export class UIElementsModule { }
