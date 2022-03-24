import { Component, OnInit, ViewChild } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-communitydetails',
  templateUrl: './communitydetails.component.html',
  styleUrls: ['./communitydetails.component.scss']
})
export class CommunitydetailsComponent implements OnInit {
    
  constructor() {   
   }
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

  activities=[
    { name:"Kristin Watson", avatar:"assets/user1.png", activity:"Won lot on 10/01/2022"},
    { name:"Jenny Wilson", avatar:"assets/user5.png", activity:"Loan approved for $1200 on 10/01/2022"},
    { name:"Esther Howard", avatar:"assets/user6.png", activity:"Paid $200 on 10/01/2022"}
  ]
  ngOnInit(): void {
  }

}
