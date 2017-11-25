import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminComponents } from "./admin-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [adminComponents]
})
export class AdminModule { }
