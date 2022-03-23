import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-communitydetails',
  templateUrl: './communitydetails.component.html',
  styleUrls: ['./communitydetails.component.scss']
})
export class CommunitydetailsComponent implements OnInit {

  constructor() { }
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
  legendposition= LegendPosition.Below;
  legendTitle="";
  communitydetails={
    monthlysavings:200,
    loanrequests:3,
    lotamount:12000,
    nextlotdate:'12/06/2022'
  };

  ngOnInit(): void {
  }

}
