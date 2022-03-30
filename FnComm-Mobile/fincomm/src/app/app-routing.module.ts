import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PaymentComponent } from './payment/payment.component';
import { SettingsComponent } from './settings/settings.component';
import { SuccessComponent } from './success/success.component';
import { TransactionsComponent } from './transactions/transactions.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },  
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'transactions',
    component:TransactionsComponent
  },
  {
    path: 'notifications',
    component:NotificationsComponent
  },
  {
    path: 'settings',
    component:SettingsComponent
  },
  {
    path:'payment', 
    component:PaymentComponent
  },
  {
    path:'success', 
    component:SuccessComponent
  }  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
