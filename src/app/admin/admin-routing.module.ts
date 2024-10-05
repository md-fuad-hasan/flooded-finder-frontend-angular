import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DivisionComponent } from './insert-info/division/division.component';
import { DistrictComponent } from './insert-info/district/district.component';
import { UpazilaComponent } from './insert-info/upazila/upazila.component';
import { authGuard } from '../service/auth.guard';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'division', component: DivisionComponent, canActivate: [authGuard] },
  { path: 'district', component: DistrictComponent },
  { path: 'upazila', component: UpazilaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
