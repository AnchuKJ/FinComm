import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddcommunityComponent } from '../addcommunity/addcommunity.component';
import { community, FincommService } from '../fincomm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  invitations=[
      {avatar:'assets/invitation.png',name:'Cancer Relief', startson:'12 APR', leader:'Ann Maria', amount:100},
      {avatar:'assets/invitation2.png',name:'Eco Friendly Community', startson:'12 APR', leader:'Helen Jose', amount:100}
  ];
  activeCommunity=[
    {"name":"Welfare Group","description":"","status":"Active","savings":200,"loan":100,"loanrequests":3,"startdate":"01/02/2022","membercount":2,"avatar":"assets\\community1.png", "monthlysavings":100},
    {"name":"Welfare Group","description":"","status":"Open","savings":200,"loan":100,"loanrequests":3,"startdate":"01/02/2022","membercount":2,"avatar":"assets\\community2.png", "monthlysavings":100},
    {"name":"Welfare Group","description":"","status":"Open","savings":200,"loan":100,"loanrequests":3,"startdate":"01/02/2022","membercount":2,"avatar":"assets\\community2.png", "monthlysavings":100}
  ];
 Communityleader=[
   {leader:'Helen Jose'}
 ];
 communitytotal=[
  { name:"Loan", value:5000},
  {name:"Savings", value:15000}
];
communitychartcolor=[
  { name: "Loan", value: '#81A1DF' },
  { name: "Savings", value: '#9081DF' },
];

legendTitle="Savings Rate";
incomechartcolor=[
  {name:"Oct 2021",value:'#81A1DF'},
  {name:"Nov 2021",value:'#818ADF'},
  {name:"Dec 2021",value:'#9081DF'},
  {name:"Jan 2022",value:'#A781DF'},
  {name:"Feb 2022",value:'#8777E0'}
];
incomeData = [
  { name: "Oct 2021", value: 105000 },
  { name: "Nov 2021", value: 55000 },
  { name: "Dec 2021", value: 15000 },
  { name: "Jan 2022", value: 150000 },
  { name: "Feb 2022", value: 20000 }
];

  communityList:community[] =[];

  constructor
  (
    public dialog:MatDialog, 
    private fincommService:FincommService,
    private router:Router
  ) 
  { }

  public gotoaddcommunity()
  {
      const dialogRef = this.dialog.open( AddcommunityComponent,
      {
        width:'1400px',
        panelClass: 'custom-dialog-container' 
      });
   // const dialogRef = this.dialog.open(AddcommunityComponent,{height:'800px',width:'1400px',panelClass: 'custom-dialog-container'

 // });
    
      dialogRef.afterClosed().subscribe(result => {
          this.getCommunities();       
      });

  }
  
  ngOnInit(): void {
    this.getCommunities();
  }

  public getCommunities(){
    this.fincommService.getCommunities().subscribe(res=>{
      this.communityList = res;
      console.log(this.communityList);
    });
  }

  public launchCommunity(item:community){
    if(item.status == 'Active'){
      this.router.navigateByUrl('community', {state: item});
    }
  }
}
