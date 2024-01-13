import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullPagesRoutingModule } from './full-pages-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileComponent } from './profile/profile.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    ProfileComponent,
    InvoiceComponent,
    BlankComponent,
 ],
  imports: [
    CommonModule,
    FullPagesRoutingModule,
    NgbModule
  ]
})
export class FullPagesModule { }
