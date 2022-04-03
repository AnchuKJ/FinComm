import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';
import * as confetti from 'canvas-confetti';
import { delay } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.scss']
})
export class SpinComponent implements OnInit {

  title='spinwheel';
  items:any;
  textOrientation:any;
  textAlignment:any;
  idToLandOn:any;
  hideWheel:any;
  seed = [...Array(6).keys()];
  members:any;
  @ViewChild('canvas') mainarea:any;
  @ViewChild(NgxWheelComponent, {static:false}) wheel: any;
  constructor(public dialogRef: MatDialogRef<SpinComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.members = data;
  }

  ngOnInit(): void {
   
    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#ca5fbf', '#a781df'];
    this.items = this.seed.map((value)=>({
      fillStyle: colors[value%2],
      text:  this.members[value].name,
      id: value,
      textFillStyle: 'white',
      textFontSize:'16'
    }));
    console.log(this.items);
  }

  ngAfterViewInit(){       
      delay(2000);   
    this.wheel.spin();  
  }

  before(){
    console.log('spin started ')
  }

  after(){    
    delay(3000);
    this.hideWheel = true;
    console.log('spin completed');
    confetti.create(this.mainarea, {resize:true, useWorker:true})({
      shapes:['square'],
      particleCount:1000,
      spread:360,
      origin:{
        y:(.5),
        x:(.5)
      }
    });   
  }

  close(){
    this.dialogRef.close(this.members[this.idToLandOn]);
  }
}
