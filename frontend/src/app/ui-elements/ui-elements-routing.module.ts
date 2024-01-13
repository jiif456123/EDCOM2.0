import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToastrComponent } from './toastr/toastr.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { SwitchComponent } from './switch/switch.component';
import { SweetAlertsComponent } from './sweet-alerts/sweet-alerts.component';
import { VerticalTimelineComponent } from './vertical-timeline/vertical-timeline.component';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { GridLayoutsComponent } from '../components/grid-layouts/grid-layouts.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { TagInputComponent } from './tag-input/tag-input.component';


const routes: Routes = [
  {
    path: '',
    children: [    
      {
        path: 'toastr',
        component: ToastrComponent,
        data: {
          title: 'Toastr'
        }
      }, 
      {
        path: 'widgets',
        component: WidgetsComponent,
        data: {
          title: 'Widgets'
        }
      },   
      {
        path: 'switch',
        component: SwitchComponent,
        data: {
          title: 'Switch'
        }
      },     
      {
        path: 'sweetalerts',
        component: SweetAlertsComponent,
        data: {
          title: 'Sweet Alerts'
        }
      },  
      {
        path: 'vertical-timeline',
        component: VerticalTimelineComponent,
        data: {
          title: 'Vertical Timeline'
        }
      }, 
      {
        path: 'horizontal-timeline',
        component: HorizontalTimelineComponent,
        data: {
          title: 'Horizontal Timeline'
        }
      },    
      {
        path: 'grid-layouts',
        component: GridLayoutsComponent,
        data: {
          title: 'Grid Layouts'
        }
      },  
      {
        path: 'pricing-table',
        component: PricingTableComponent,
        data: {
          title: 'Pricing Table'
        }
      }, 
      {
        path: 'color-palette',
        component: ColorPaletteComponent,
        data: {
          title: 'Color Palette'
        }
      },
      {
        path: 'tag-input',
        component: TagInputComponent,
        data: {
          title: 'Tag Input'
        }
      }      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIElementsRoutingModule { }
