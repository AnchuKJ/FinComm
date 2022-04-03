import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { community, FincommService } from '../fincomm.service';

@Component({
  selector: 'app-addcommunity',
  templateUrl: './addcommunity.component.html',
  styleUrls: ['./addcommunity.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddcommunityComponent implements OnInit {

  constructor(private fincommService:FincommService) { }

  ngOnInit(): void {
    this.createCommunity();
  }

  public createCommunity(){

    var payload = new community();
    payload.name = "test";
    payload.status = "Open";
    payload.savings = 0;
    payload.loan = 0;
    payload.loanrequests = 0;
    payload.startdate =Date.now.toString();
    payload.membercount = 0;
    payload.avatar = "";

    this.fincommService.createCommunity(payload).subscribe(res=>{
      console.log("calling webservice");
    });
  }
}
