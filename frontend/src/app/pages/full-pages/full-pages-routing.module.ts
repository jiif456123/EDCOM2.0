import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { BlankComponent } from './blank/blank.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      },  {
        path: 'invoice',
        component: InvoiceComponent,
        data: {
          title: 'Invoice'
        }
      },
      {
        path: 'blank-page',
        component: BlankComponent,
        data: {
          title: 'Blank Page'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullPagesRoutingModule { }
