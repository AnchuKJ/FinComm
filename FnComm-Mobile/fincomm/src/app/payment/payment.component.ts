import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FincommService } from '../fincomm.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router, private fincommservice: FincommService) { }

  ngOnInit() {}

  public amount = 200;
  doPayment(){
    this.fincommservice.doTransaction(this.amount).subscribe(res=>{
      this.router.navigateByUrl('success');
    });
  }
}
