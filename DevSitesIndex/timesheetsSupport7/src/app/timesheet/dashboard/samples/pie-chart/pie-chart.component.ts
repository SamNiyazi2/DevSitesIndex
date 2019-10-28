import { Component, OnInit, Input, OnChanges } from '@angular/core';

// 10/28/2019 07:49 am - SSN - [20191028-0732] - [003] - Timesheet dashboard - Add available chart options samples

import { ChartType, ChartOptions, ChartTitleOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {



  // 10/28/2019 07:49 am - SSN - [20191028-0732] - [003] - Timesheet dashboard - Add available chart options samples


  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];




  // 10/28/2019 09:56 am - SSN - [20191028-0909] - [005] - Timesheet dashboard - Summary by discipline
  @Input() pieChartLabels_input: Label[];
  @Input() pieChartData_input: SingleDataSet;
  @Input() pieCharTitle_input;





  constructor() { }

  ngOnInit() { }


  // 10/28/2019 09:56 am - SSN - [20191028-0909] - [005] - Timesheet dashboard - Summary by discipline
  ngOnChanges(): void {

    if (!this.pieChartData_input) return;

    this.pieChartData = this.pieChartData_input;
    this.pieChartLabels = this.pieChartLabels_input;

    this.pieChartOptions = {
      responsive: true,
      title: { text: this.pieCharTitle_input, display: true }

    };


  }




}
