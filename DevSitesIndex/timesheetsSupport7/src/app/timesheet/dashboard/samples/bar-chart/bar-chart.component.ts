import { Component, OnInit, OnChanges, Input } from '@angular/core';


// 10/28/2019 08:35 am - SSN - [20191028-0732] - [004] - Timesheet dashboard - Add available chart options samples

// 10/30/2019 06:13 am - SSN - [20191030-0613] - [001] - Revise chart creation - Use scripts


import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { IBarChartData } from '../Interaces/IBarChartData';
import { ColorsList } from "../ColorsList";
import * as Chart from 'chart.js';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit() {


  }


  @Input() barChartData: IBarChartData;


  ngOnChanges(): void {

    setTimeout(() => { this.processRequest(); }, 500);

  }





  processRequest() {




    let ndx = 0;

    this.barChartData.Master_barChartData.datasets.forEach((r) => {

      r.backgroundColor = ColorsList[ndx];
      r.borderColor = ColorsList[ndx];
      r.borderWidth = 1;

      ndx += 1;

    });




    let selectedType = 'bar';

    if (this.barChartData.Master_barChartType) {
      selectedType = this.barChartData.Master_barChartType;
    }

    let definedHeight: number = null;

    if (this.barChartData.Master_barChartHeight) {
      definedHeight = this.barChartData.Master_barChartHeight;
    }



    let ref2: HTMLCanvasElement = document.getElementById(this.barChartData.Master_Canvas_ID) as HTMLCanvasElement;

    let ctx = ref2.getContext('2d');


    if (definedHeight) ctx.canvas.height = definedHeight;



    var myChart = new Chart(ctx, {

      type: selectedType,

      data: this.barChartData.Master_barChartData,



      options: {

        title: {
          display: true,
          text: this.barChartData.Master_barChartTitle,
          //position: "left"

        },

        responsive: true, // true is the default https://www.chartjs.org/docs/latest/general/responsive.html?h=size

        maintainAspectRatio: true,

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });




  }





}
