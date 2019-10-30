// 10/29/2019 08:30 am - SSN - [20191029-0747] - [003] - Timesheet dashboard - Daily work hour summary

import { Label, SingleDataSet } from 'ng2-charts';
import { ChartDataSets, ChartType } from 'chart.js';

export interface IBarChartData {

  // Sample 
//  this.barChartData_201 = {

//  Master_Canvas_ID: "testCanvas_201",

//  Master_barChartData: {
//    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//    datasets: [
//      {
//        label: '# of Votes (201)',
//        data: [12, 19, 3, 5, 2, 3],
//      },
//      {
//        label: '# of Tests (201)',
//        data: [5, 10, 10, 5, 7, 9],

//      }
//    ]
//  }
//}


  //Master_barChartLabels: Label[];

  ////Master_barChartData: ChartDataSets[];
  Master_barChartData: {

    labels: string[],

    datasets: {

      label: string, data: number[], backgroundColor?: string, borderColor?: string, borderWidth?: number

    }[]


  };

  Master_Canvas_ID: string;

  Master_barChartTitle: string;

  Master_barChartType?: string; // 'bar' | 'horizontalBar'

  Master_barChartHeight?: number;

}

