import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunitydetailsComponent } from './communitydetails/communitydetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'community', component: CommunitydetailsComponent },
  { path: 'loandetails', component: LoandetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
