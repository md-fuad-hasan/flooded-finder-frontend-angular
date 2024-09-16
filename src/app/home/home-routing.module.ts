import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAreaComponent } from './create-area/create-area.component';
import { TeamComponent } from './team/team.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
  { path: '', component: AreaComponent },
  { path: 'team', component: TeamComponent },
  { path: 'create-area', component: CreateAreaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
