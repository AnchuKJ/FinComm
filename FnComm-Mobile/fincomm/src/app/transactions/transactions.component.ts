import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  
  public tranList =[
    {title: 'Monthly Payment', user:'Kristin Watson', avatar:'assets/user1.png', amount:200, trandate:'01/02/2022'},
    {title: 'Won the lot', user:'Jasmine Favin', avatar:'assets/user2.png', amount:2000, trandate:'01/02/2022'},
    {title: 'Requested for a loan', user:'Leslie Alexander', avatar:'assets/user3.png', amount:5000, trandate:'01/02/2022'},
    {title: 'Loan Approved', user:'Eleanor Pena', avatar:'assets/user4.png', amount:3000, trandate:'01/02/2022'},
  ];
  constructor() { }

  ngOnInit() {}

}
