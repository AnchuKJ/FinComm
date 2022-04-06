import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('pieChart1') pieChart1;
  @ViewChild('pieChart2') pieChart2;
  @ViewChild('pieChart3') pieChart3;
  @ViewChild('barChart') barChart;
  bars: any;
  pie1 : any;
  pie2 : any;
  pie3 : any;
  colorArray: any;
  
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  doPayment():void{
    this.router.navigateByUrl("payment")
  }

  ionViewDidEnter(){
  
    this.pie1 = this.createPieChart(this.pie1, this.pieChart1, ['Savings', 'Total'], [2000, 10000], ["#6D5FFD", "#EEEFEF"], 'Savings %');
    this.pie2 =this.createPieChart(this.pie2, this.pieChart2,  ['Loans','Total'], [7000, 20000], ["#C916CC", "#EEEFEF"], 'Loans approved %');
    this.pie3 = this.createPieChart(this.pie3, this.pieChart3,  ['Lot','Total'], [3, 10], ["#E1604D", "#EEEFEF"], 'Lot Count');
    this.createBarChart(this.barChart,  ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun'], [1000,6000, 3000, 7000, 5000, 2000], ["#E1604D", "#EEEFEF"], '');
  }

  ionViewDidLeave(){
    if(this.pie1){
      this.pie1.destroy();
    } 
    if(this.pie2){
      this.pie2.destroy();
    }
    if(this.pie3){
      this.pie3.destroy();
    }  
    if(this.bars){
      this.bars.destroy();
    }
  }
  createPieChart(pie, chartComp, labels, value, backcolor, title) {
    pie = new Chart(chartComp.nativeElement, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: value,
          backgroundColor: backcolor,         
          borderWidth: 1
        }]
      },
      
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            color:'white',
            text: title
          }
        }
      }
    });

    return pie;
  }

  createBarChart(chartComp, labels, value, backcolor, title) {
    this.bars = new Chart(chartComp.nativeElement, {
      type: 'line',
      data: {
        labels: labels,        
        datasets: [{
          data: value,
          backgroundColor: 'rgba(85, 107, 218, .2)',         
          borderWidth: 1,
          fill: true
        }]
      },
      
      options: {       
        responsive: true,
        plugins: {
         
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: title
          }
        },
        interaction: {
          intersect: true,
        }
      }
    });
  }
}
