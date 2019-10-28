import { Component, OnInit, OnChanges, Input } from '@angular/core';


// 10/28/2019 08:35 am - SSN - [20191028-0732] - [004] - Timesheet dashboard - Add available chart options samples

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {



  // 10/28/2019 08:35 am - SSN - [20191028-0732] - [004] - Timesheet dashboard - Add available chart options samples

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];





  constructor() { }

  ngOnInit() {
  }


  // 10/28/2019 09:45 am - SSN - [20191028-0909] - [003] - Timesheet dashboard - Summary by discipline

  @Input() barChartData_input: any;

  ngOnChanges(): void {


    if (this.barChartData_input) {

      this.barChartData = this.barChartData_input;

    }

  }



}
