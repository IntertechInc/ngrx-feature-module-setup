import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

import { AdminComponent } from './admin/admin.component';

export const adminRoutes: Routes = [
    { path: '', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminComponents = [
    AdminComponent
];
