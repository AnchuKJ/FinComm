import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { community, FincommService } from '../fincomm.service';

export interface Task {
  color: ThemePalette;
}

@Component({
  selector: 'app-addcommunity',
  templateUrl: './addcommunity.component.html',
  styleUrls: ['./addcommunity.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AddcommunityComponent implements OnInit {

  task: Task = {   
    color: 'primary'   
  };

  @ViewChild("fileupload", {static:false}) fileUpload:ElementRef;
  NGOSelected: boolean = false;
  MFISelected: boolean = false;
  savingsSelected: boolean = false;
  businessSelected: boolean = false;
  selected: Date | null;
  uploadedImage:string;
  community = new community();
  duration:number;
  lotamount:number;
  lotFrequency:number;
  loancount:number;
  maxLoan:number;

  constructor(private fincommService:FincommService, 
    public dialogRef: MatDialogRef<AddcommunityComponent>,
    public datepipe: DatePipe) { }

  rules = [
    "A community should have atleast 10 members.",
    "The minimum duration for the community is one year.",
    "If the number of joined members not meets the requirement until start date, Bank have the authority to cancel this community.",
    "The lot period will be calculated by the bank based on the number of members and duration of the community.",
    "The number of loans and loan amount allowed for each community will be calculated by the bank based on the contribution and duration of the community."
  ];

  ngOnInit(): void {
    this.community.membercount = 10;
    this.community.savings = 10;
    this.duration = 6;
    this.calculateData();
  }

  setNGO(completed: boolean){
    this.NGOSelected = completed;
  }

  setMFI(completed: boolean){
    this.MFISelected = completed;
  }

  setSavings(completed: boolean){
    this.savingsSelected = completed;
  }

  setBusiness(completed: boolean){
    this.businessSelected = completed;
  }

  public createCommunity(){
    this.community.status = "Open";
    this.community.loan =0;
    this.community.loanrequests = 0;  
    this.community.startdate = ""+this.datepipe.transform(new Date(), 'dd/MM/yyyy');
    this.community.avatar = this.uploadedImage;

    this.fincommService.createCommunity(this.community).subscribe(res=>{
      this.dialogRef.close();
    });
  }

  public onPictureUpload(){
    const fileUploadControl = this.fileUpload.nativeElement;
    fileUploadControl.onchange = ()=>{
      const file = fileUploadControl.files[0];
      var fileData = { data: file, inProgress: false, progress:0};
      this.uploadFile(fileData);
    };
    fileUploadControl.click();
  }

  public uploadFile(file:any){
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.fincommService.uploadCommunityPicture(formData).subscribe((event:any) => {
      if(typeof(event)=== 'object'){
        this.uploadedImage = this.fincommService.communityImageBaseUrl() + event[0];
      }
    });
  }

  public submit(){
    this.createCommunity();    
  }

  public cancel(){
    this.dialogRef.close();
  }

  public onMemberCountChange(){
    this.calculateData();
  }

  public onDurationChange(){
    this.calculateData();

  }

  public onSavingsChange(){
    this.calculateData();

  }

  public calculateData(){
    this.lotamount = this.community.membercount * this.community.savings;
    this.lotFrequency = this.duration/this.community.membercount;
    this.loancount = this.community.membercount/1.5;
    this.maxLoan = this.community.membercount * this.community.savings;
  }
}
