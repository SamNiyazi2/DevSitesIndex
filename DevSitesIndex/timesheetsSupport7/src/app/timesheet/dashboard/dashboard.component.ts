
// 10/28/2019 06:00 am - SSN - [20191028-0558] - [001] - Timesheet dashboard

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

import { IPieChartData } from './samples/Interaces/IPieChartData';
import { I18nContext } from '@angular/compiler/src/render3/view/i18n/context';


import * as ehu from '../../util/ErrorHandlingHelpers';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // 10/28/2019 09:54 am - SSN - [20191028-0909] - [004] - Timesheet dashboard - Summary by discipline

  public barChartData_Test101: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 5, 5, 4], label: 'Series AAA' },
    { data: [28, 48, 40, 19, 8, 2, 9], label: 'Series BBB' }
  ];



  // 10/28/2019 09:54 am - SSN - [20191028-0909] - [004] - Timesheet dashboard - Summary by discipline

  pie_labels: any = [['Development-a'], ['Maintenance-a'], 'Modifications-c', 'aaaa', 'ddadsafsadfasf', 'asfdafeqer', 'asdfasfdsadfsaf', 'qww', 'aewtrytrue', 'fgkhkfkk', 'safsafa'];
  pie_data: any = [40.1, 50.25, 349.15];





  // 10/29/2019 04:38 am - SSN - [20191029-0124] - [002] - Timesheet dashboard - Summary by project

  //public pieChartLabels_Test102: Label[] = [['Development-a'], ['Maintenance-a'], 'Modifications-c'];
  //public pieChartData_Test102: SingleDataSet = [40.1, 50.25, 349.15];

  public pieChartData_SummaryByDiscipline: IPieChartData;

  // 10/29/2019 05:17 am - SSN - [20191029-0124] - [007] - Timesheet dashboard - Summary by project

  public pieChartData_SummaryByProject: IPieChartData;





  constructor(private dataService: DataService) { }

  ngOnInit() {




    for (var i = 0; i < 8; i++) {
      var r = Math.floor(Math.random() * 100);
      this.pie_data.push(r);
    }



    this.setup_SummaryByDiscipline();
    this.setup_SummaryByProject();


  }



















  setup_SummaryByDiscipline() {

    this.dataService.getTimelog_SummaryByDiscipline().subscribe((data: any[]) => {

      this.pie_labels = [];
      this.pie_data = [];

      let firstDate: Date = null;

      for (var x = 0; x < data.length; x++) {

        let thisDate: Date = new Date(data[x].firstDate);

        if (!firstDate) firstDate = thisDate;
        if (firstDate > thisDate) firstDate = thisDate;

        this.pie_labels.push(data[x].disciplineShort);
        this.pie_data.push(data[x].totalHours);

      };

      // 10/29/2019 04:39 am - SSN - [20191029-0124] - [003] - Timesheet dashboard - Summary by project
      // Revise to allow for multiple use
      this.pieChartData_SummaryByDiscipline = {

        pieChartLabels_Test102: this.pie_labels,
        pieChartData_Test102: this.pie_data,
        pieCharTitle_Test102: "NotSet_201910290451"

      };


      if (firstDate) {
        this.pieChartData_SummaryByDiscipline.pieCharTitle_Test102 = "Work Hours by Discipline - " + firstDate.toLocaleDateString() + " to date";

      }


    },
      (e) => {
        console.log("20191029-0137 - dashboard.component - subscribe exception");
        console.log(e);  
      });

  }
















  // 10/29/2019 05:18 am - SSN - [20191029-0124] - [008] - Timesheet dashboard - Summary by project

  setup_SummaryByProject() {

    this.dataService.getTimelog_SummaryByProject().subscribe((data: any[]) => {

      this.pie_labels = [];
      this.pie_data = [];

      let firstDate: Date = null;

      for (var x = 0; x < data.length; x++) {

        let thisDate: Date = new Date(data[x].firstDate);

        if (!firstDate) firstDate = thisDate;
        if (firstDate > thisDate) firstDate = thisDate;

        this.pie_labels.push(data[x].projectTitle);
        this.pie_data.push(data[x].totalHours);

      };

      this.pieChartData_SummaryByProject = {

        pieChartLabels_Test102: this.pie_labels,
        pieChartData_Test102: this.pie_data,
        pieCharTitle_Test102: "NotSet_20191029059"

      };


      if (firstDate) {
        this.pieChartData_SummaryByDiscipline.pieCharTitle_Test102 = "Project Work - " + firstDate.toLocaleDateString() + " to date";

      }


    },
      (e) => {
        console.log("20191029-0519 - dashboard.component - subscribe exception - Summary by project");
        console.log(e);

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(e);
      });

  }












}
