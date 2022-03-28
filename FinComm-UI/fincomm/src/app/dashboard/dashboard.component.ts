import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  invitations=[
      {avatar:'assets/invitation.png',scheme:'Cancer Relief'}
  ];
  ActiveCommunity=[
    {group:'Welfare Group',status:'ACTIVE',savings:'$120',loanTotal:'$120',loanRequest:'3'}
  ];
 Communityleader=[
   {leader:'Helen Jose'}
 ];
 communitytotal=[
  { name:"Loan", value:5000},
  {name:"Savings", value:15000}
];
communitychartcolor=[
  { name: "Loan", value: '#8E30FF' },
  { name: "Savings", value: '#CF7CE1' },
];

legendTitle="Savings Rate";
incomechartcolor=[
  {name:"Oct 2021",value:'#8E30FF'},
  {name:"Nov 2021",value:'#8E30FF'},
  {name:"Dec 2021",value:'#8E30FF'},
  {name:"Jan 2021",value:'#8E30FF'},
  {name:"Feb 2021",value:'#8E30FF'}
];
incomeData = [
  { name: "Oct 2021", value: 105000 },
  { name: "Nov 2021", value: 55000 },
  { name: "Dec 2021", value: 15000 },
  { name: "Jan 2021", value: 150000 },
  { name: "Feb 2021", value: 20000 }
];
  constructor(public router:Router) {
  
   }

  public gotoaddcommunity()
  {
    this.router.navigate(['/addcommunity']);
  }
  
  ngOnInit(): void {
  }

}
