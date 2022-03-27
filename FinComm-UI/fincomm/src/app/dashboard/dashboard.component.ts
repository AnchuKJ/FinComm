import { Component, OnInit } from '@angular/core';

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
  {name:"Savings", value:12000}
];
communitychartcolor=[
  { name: "Loan", value: '#8E30FF' },
  { name: "Savings", value: '#CF7CE1' },
];
legendTitle="Savings Rate";
  constructor() { }

  ngOnInit(): void {
  }

}
