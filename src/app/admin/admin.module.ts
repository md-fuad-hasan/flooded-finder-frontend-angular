import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DivisionComponent } from './insert-info/division/division.component';
import { DistrictComponent } from './insert-info/district/district.component';
import { UpazilaComponent } from './insert-info/upazila/upazila.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    DivisionComponent,
    DistrictComponent,
    UpazilaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
