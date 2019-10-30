import { Component, OnInit, Input, OnChanges } from '@angular/core';

// 10/28/2019 07:49 am - SSN - [20191028-0732] - [003] - Timesheet dashboard - Add available chart options samples

import { ChartType, ChartOptions, ChartTitleOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { IPieChartData } from '../Interaces/IPieChartData';



@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, OnChanges {



  // 10/28/2019 07:49 am - SSN - [20191028-0732] - [003] - Timesheet dashboard - Add available chart options samples


  public pieChartOptions: ChartOptions = {
    responsive: true,
    title: { display: false }
  };

  public pieChartLabels: Label[]; // = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
  public pieChartData: SingleDataSet = []; // = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartColor: any = [
    {
      backgroundColor: [
        'rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)',
        'rgba(0,0,255, 0.9)',
        'rgba(165,42,42, 0.9)',
        'rgba(124,252,0, 0.9)',
        'rgba(0,100,0, 0.9)',
        'rgba(47,79,79, 0.9)',
        'rgba(70,130,180, 0.9)',
        'rgba(30,144,255, 0.9)',
        'rgba(25,25,112, 0.9)',
        'rgba(139,0,139, 0.9)',
        'rgba(255,20,147, 0.9)',
        'rgba(139,69,19, 0.9)',
        'rgba(112,128,144, 0.9)',
        'rgba(105,105,105, 0.9)',
        'rgba(50,205,50, 0.9)',
        'rgba(0,250,154, 0.9)',
        'rgba(0,128,128, 0.9)',
        'rgba(0,191,255, 0.9)',
        'rgba(30,144,255, 0.9)',
        'rgba(0,0,255, 0.9)',
        'rgba(123,104,238, 0.9)',
        'rgba(255,0,255, 0.9)',
        'rgba(199,21,133, 0.9)',

      ]
    }
  ]



  // 10/28/2019 09:56 am - SSN - [20191028-0909] - [005] - Timesheet dashboard - Summary by discipline
  // 10/29/2019 04:40 am - SSN - [20191029-0124] - [004] - Timesheet dashboard - Summary by project

  //@Input() pieChartLabels_input: Label[];
  //@Input() pieChartData_input: SingleDataSet;
  //@Input() pieCharTitle_input;

  @Input() pieChartData_input: IPieChartData;




  constructor() { }

  ngOnInit() { }


  // 10/28/2019 09:56 am - SSN - [20191028-0909] - [005] - Timesheet dashboard - Summary by discipline
  ngOnChanges(): void {

    if (!this.pieChartData_input) return;

    // 10/29/2019 04:57 am - SSN - [20191029-0124] - [005] - Timesheet dashboard - Summary by project

    this.pieChartData = this.pieChartData_input.pieChartData_Test102;
    this.pieChartLabels = this.pieChartData_input.pieChartLabels_Test102;

    this.pieChartOptions = {
      responsive: true,
      title: { text: this.pieChartData_input.pieChartTitle_Test102, display: true }

    };


  }




  // 10/29/2019 05:37 am - SSN - [20191029-0536] - [001] - Timesheet dashboard - Summary by project - Add click event
  // https://stackoverflow.com/questions/38378984/chart-js-angular-2-ng2-charts-custom-on-click-event

  chartClicked(e: any): void {


    if (e.active.length > 0) {

      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        console.log(clickedElementIndex, label, value)
      }
    }
  }




}
