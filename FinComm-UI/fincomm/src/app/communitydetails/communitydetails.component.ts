import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LegendPosition } from '@swimlane/ngx-charts';
import { community, FincommService } from '../fincomm.service';
import { SpinComponent } from '../spin/spin.component';

@Component({
  selector: 'app-communitydetails',
  templateUrl: './communitydetails.component.html',
  styleUrls: ['./communitydetails.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommunitydetailsComponent implements OnInit {
    public communityData:any; 
    public activities:any;

    myengagement = [
      { name: "Earnings", value: 1000 },
      { name: "Contribution", value: 300 },
      { name: "Liabilities", value:400 }
    ];
    engagementcolor = [
      { name: "Earnings", value: '#8E30FF' },
      { name: "Contribution", value: '#CF7CE1' },
      { name: "Liabilities", value:'#968ABF' }
    ];
    communitytotal=[
      { name:"Loan", value:5000},
      {name:"Savings", value:12000}
    ];
    communitychartcolor=[
      { name: "Loan", value: '#8E30FF' },
      { name: "Savings", value: '#CF7CE1' },
    ];

    legendposition= LegendPosition.Below;
    legendTitle="";
    communitydetails={
      monthlysavings:200,
      loanrequests:3,
      lotamount:12000,
      nextlotdate:'12/06/2022'
    };

    members=[
      { name:"Kristin Watson", avatar:"assets/user1.png"},
      { name:"Jasmine Favin", avatar:"assets/user2.png"},
      { name:"Leslie Alexander", avatar:"assets/user3.png"},
      { name:"Eleanor Pena", avatar:"assets/user4.png"},
      { name:"Jenny Wilson", avatar:"assets/user5.png"},
      { name:"Esther Howard", avatar:"assets/user6.png"}
    ]

    constructor( 
      private router:Router, 
      public dialog:MatDialog,
      private fincommService:FincommService,
      public datepipe: DatePipe ) 
    { 
      var navigation = this.router.getCurrentNavigation();

      if(navigation){ 
        this.communityData = navigation.extras.state;
      }
      if(this.communityData == null){
        this.communityData={name:'Welfare group', savings:2000, loan:500};
      }
    }
    
    ngOnInit(): void {
      this.fincommService.getActivities().subscribe(res=>{
        this.activities = res;
      });
    }

    onSpin(){
      const dialogRef = this.dialog.open( SpinComponent,
        {
          data:this.members,
          //width:'1400px',
          panelClass: 'spin-dialog-container' 
        });
      
        dialogRef.afterClosed().subscribe(result => {
          var desc = "Won lot on "+ this.datepipe.transform(new Date(), 'dd/MM/yyyy');
          console.log(desc);
          var payload= { name: result.name, avatar:result.avatar, activityDesc: desc};
          this.fincommService.createActivity(payload).subscribe(resData=>{
            this.fincommService.getActivities().subscribe(res=>{
              this.activities = res;
            });
          });
          console.log(`Dialog result: ${result}`);        
        });
    }
}
