import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommunitydetailsComponent } from './communitydetails/communitydetails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { AddcommunityComponent } from './addcommunity/addcommunity.component';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FincommService } from './fincomm.service';
import { SpinComponent } from './spin/spin.component';
import { NgxWheelModule } from 'ngx-wheel';
import { DatePipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CommunitydetailsComponent,
    LoandetailsComponent,
    AddcommunityComponent,
    SpinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatIconModule,    
    FlexLayoutModule,
    MatInputModule,
    MatMenuModule,
    NgxChartsModule,
    MatDialogModule,
    HttpClientModule,
    NgxWheelModule,
    MatCheckboxModule,
    FormsModule
  ],
  providers: [MatDatepickerModule, FincommService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
