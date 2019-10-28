import { Component, OnInit } from '@angular/core';

// 10/28/2019 07:43 am - SSN - [20191028-0732] - [002] - Timesheet dashboard - Add available chart options samples
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';




@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {






  // 10/28/2019 07:43 am - SSN - [20191028-0732] - [002] - Timesheet dashboard - Add available chart options samples

  public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  //public lineChartOptions: (ChartOptions & { annotation: any }) = {
  //  responsive: true,
  //};
  public lineChartOptions: (ChartOptions ) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];





  constructor() { }

  ngOnInit() {
  }

}
