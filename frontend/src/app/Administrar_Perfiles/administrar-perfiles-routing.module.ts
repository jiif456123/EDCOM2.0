import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PerfilesComponent } from './perfiles/perfiles.component';

const routes: Routes = [
  {
    path: "", component: PerfilesComponent, data: { title: 'Administrar perfiles' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrarPerfilesRoutingModule { }
