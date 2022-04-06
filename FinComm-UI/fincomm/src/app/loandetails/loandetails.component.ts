import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { FincommService } from '../fincomm.service';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.scss']
})
export class LoandetailsComponent implements OnInit {

  loanrequests = [
    {name:'Eleanor Pena', avatar:this.fincommService.userImgeBaseUrl()+'user4.png', status:'PENDING', requestdate:'10/01/2022', amount:'2000', votes:3, isnew:0, score:8},
    {name:'Jasmine Favin', avatar:this.fincommService.userImgeBaseUrl()+'user2.png', status:'OPEN', requestdate:'10/01/2022', amount:'2000', votes:0, isnew:1, score:6}
  ];

  votingloans = [
    {name:'Eleanor Pena', avatar:this.fincommService.userImgeBaseUrl()+'user4.png', enddate:'10/01/2022', amount:'2000'},
    {name:'Jenny Wilson', avatar:this.fincommService.userImgeBaseUrl()+'user5.png', enddate:'10/01/2022', amount:'2000'},
    {name:'Esther Howard', avatar:this.fincommService.userImgeBaseUrl()+'user6.png', enddate:'10/01/2022', amount:'2000'}   
  ];

  approvedloans = [
    {name:'Kristin Watson', avatar:this.fincommService.userImgeBaseUrl()+'user1.png', approveddate:'10/01/2022', amount:'2000', votes:3},
    {name:'Leslie Alexander', avatar:this.fincommService.userImgeBaseUrl()+'user3.png', approveddate:'10/01/2022', amount:'2000', votes:3}
  ];

  legendposition= LegendPosition.Below;
  legendTitle="";

  chartdata=[
    { name:"Open", value:1},
    {name:"Approved", value:2},
    {name:"Pending", value:3}
  ];
  chartcolor=[
    { name: "Open", value: '#543678' },
    { name: "Approved", value: '#C42DA6' },
    {name:"Pending", value:'#7D67E0'}
  ];

  constructor(private fincommService:FincommService) { }

  ngOnInit(): void {
  }

}
