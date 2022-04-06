import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcommunityComponent } from './addcommunity/addcommunity.component';
import { CommunitydetailsComponent } from './communitydetails/communitydetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'community', component: CommunitydetailsComponent },
  { path: 'loandetails', component: LoandetailsComponent },
  { path:'addcommunity',component:AddcommunityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
