
// 10/28/2019 06:00 am - SSN - [20191028-0558] - [001] - Timesheet dashboard

import { Component, OnInit, ElementRef } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

import { IPieChartData } from './samples/Interaces/IPieChartData';
import { I18nContext } from '@angular/compiler/src/render3/view/i18n/context';


import * as ehu from '../../util/ErrorHandlingHelpers';
import { IBarChartData } from './samples/Interaces/IBarChartData';
import { ColorsList } from './samples/ColorsList';
import * as Chart from 'chart.js';
import { GenUtilService } from 'src/app/shared/gen-util.service';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // 10/28/2019 09:54 am - SSN - [20191028-0909] - [004] - Timesheet dashboard - Summary by discipline
  // 10/29/2019 08:39 am - SSN - [20191029-0747] - [006] - Timesheet dashboard - Daily work hour summary
  // Prep for dynamic loading

  //public barChartData_Test102: IBarChartData;
  //public barChartData_Test103: IBarChartData;

  public barChartData_201: IBarChartData
  public barChartData_202: IBarChartData;
  public barChartData_Timelog_SummaryByWeekAndDiscipline: IBarChartData;



  // 10/28/2019 09:54 am - SSN - [20191028-0909] - [004] - Timesheet dashboard - Summary by discipline
  // 10/29/2019 08:19 am - SSN - [20191029-0747] - [002] - Timesheet dashboard - Daily work hour summary
  // Move inside functions
  //pie_labels: any = [['Development-a'], ['Maintenance-a'], 'Modifications-c', 'aaaa', 'ddadsafsadfasf', 'asfdafeqer', 'asdfasfdsadfsaf', 'qww', 'aewtrytrue', 'fgkhkfkk', 'safsafa'];
  //pie_data: any = [40.1, 50.25, 349.15];





  // 10/29/2019 04:38 am - SSN - [20191029-0124] - [002] - Timesheet dashboard - Summary by project

  //public pieChartLabels_Test102: Label[] = [['Development-a'], ['Maintenance-a'], 'Modifications-c'];
  //public pieChartData_Test102: SingleDataSet = [40.1, 50.25, 349.15];

  public pieChartData_SummaryByDiscipline: IPieChartData;

  // 10/29/2019 05:17 am - SSN - [20191029-0124] - [007] - Timesheet dashboard - Summary by project

  public pieChartData_SummaryByProject: IPieChartData;





  constructor(private dataService: DataService, private genUtil: GenUtilService) { }

  ngOnInit() {


    this.genUtil.setPageTitle("Timelog Dashboard");


    this.setup_SummaryByDiscipline();
    this.setup_SummaryByProject();

    this.setup_Timelog_SummaryByDailyWorkHours();
    this.setup_Timelog_SummaryByWeekAndDiscipline();

  }




  // 10/30/2019 02:39 pm - SSN - [20191030-1054] - [002] - Timesheet dashboard - Weekly work hours summary

  setup_Timelog_SummaryByWeekAndDiscipline() {






    let dataSets = [];

    //interface disciplineListRecord {
    //  disciplineShort: string,
    //   disciplineID :number
    //}

    this.dataService.getTimelog_SummaryByWeekAndDiscipline().subscribe((data: any[]) => {


      let weekEndingList = new Set(data.map(r => r.weekEnding));
      let disciplineList = new Set(data.map(r => r.disciplineShort));

      let weekendingArray = []

      weekEndingList.forEach(r => weekendingArray.push(r));


      disciplineList.forEach((r0) => {

        dataSets.push(
          {
            label: r0,
            data: data.filter(r2 => r2.disciplineShort == r0).map(r3 => r3.totalHours)
          }
        );
      });


      console.log("20191030-1821");
      console.log(disciplineList);
      console.log(dataSets);


      this.barChartData_Timelog_SummaryByWeekAndDiscipline = {

        Master_Canvas_ID: "canvas_20191001443",
        Master_barChartType: 'horizontalBar',
        Master_barChartTitle: "Weekly Summary by Descipline to date",
        Master_barChartHeight: 400,

        Master_barChartData: {
          labels: weekendingArray,
          datasets: dataSets,

        }
      }













      console.log('subscribe 0303');

      console.log(data);
    },
      (e) => {

        console.log("20191030-1512 - dashboard.component - subscribe exception - Summary by daily work hours");
        console.log(e);

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(e);
      });




  }






  setup_Timelog_SummaryByDailyWorkHours() {



    this.barChartData_201 = {

      Master_Canvas_ID: "testCanvas_201",

      Master_barChartTitle: "First chart title",

      Master_barChartData: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes (201)',
            data: [12, 19, 3, 5, 2, 3],
          },
          {
            label: '# of Tests (201)',
            data: [5, 10, 10, 5, 7, 9],

          }
        ]
      }
    }












    let dataSets = [];
    let disciplineRecords = [];
    let labelsRecords_dates = [];

    this.dataService.getTimelog_SummaryByDailyWorkHours().subscribe((data: any[]) => {


      let lastDiscipline: string = null;
      let lastDate: Date = null;
      let currentDate: Date = null;

      let counter = 0;
      let recordCount = data.length;


      data.forEach((r) => {

        counter += 1;


        if (!lastDiscipline) {

          lastDiscipline = r.discipline;

        }

        if (lastDiscipline != r.discipline || recordCount == counter) {

          dataSets.push({ label: lastDiscipline, data: disciplineRecords.slice() });
          disciplineRecords = []
          lastDiscipline = r.discipline;
        }

        if (!lastDate) {
          lastDate = new Date(r.nYear, r.nMonth - 1, r.nDay);
          labelsRecords_dates.push(lastDate);
        }

        currentDate = new Date(r.nYear, r.nMonth - 1, r.nDay);

        if (this.genUtil.compareDates(currentDate, lastDate) != 0) {

          let dateIndex = labelsRecords_dates.findIndex((r) => this.genUtil.compareDates(r, currentDate) == 0);

          if (dateIndex == -1) {
            labelsRecords_dates.push(currentDate);
          }
        }


        let hours = r.totalHours;
        if (!hours) hours = 0;

        disciplineRecords.push(hours);

      });



      let dateLabels = labelsRecords_dates.map(d1 => d1.getFullYear().toString() + "/" + (d1.getMonth() + 1).toString() + "/" + d1.getDate().toString());



      this.barChartData_202 = {

        Master_Canvas_ID: "testCanvas_202",
        Master_barChartType: 'horizontalBar',
        Master_barChartTitle: "Work hours by Discipline to date",
        Master_barChartHeight: 400,

        Master_barChartData: {
          labels: dateLabels,
          datasets: dataSets,

        }
      }





    },
      (e) => {

        console.log("20191029-1212 - dashboard.component - subscribe exception - Summary by daily work hours");
        console.log(e);

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(e);
      });







  }
























  setup_SummaryByDiscipline() {

    this.dataService.getTimelog_SummaryByDiscipline().subscribe((data: any[]) => {

      let pie_labels = [];
      let pie_data = [];

      let firstDate: Date = null;

      for (var x = 0; x < data.length; x++) {

        let thisDate: Date = new Date(data[x].firstDate);

        if (!firstDate) firstDate = thisDate;
        if (firstDate > thisDate) firstDate = thisDate;

        pie_labels.push(data[x].disciplineShort);
        pie_data.push(data[x].totalHours);

      };

      // 10/29/2019 04:39 am - SSN - [20191029-0124] - [003] - Timesheet dashboard - Summary by project
      // Revise to allow for multiple use
      this.pieChartData_SummaryByDiscipline = {

        pieChartLabels_Test102: pie_labels,
        pieChartData_Test102: pie_data,
        pieChartTitle_Test102: "NotSet_201910290451"

      };


      if (firstDate) {
        this.pieChartData_SummaryByDiscipline.pieChartTitle_Test102 = "Work Hours by Discipline -   " + firstDate.toLocaleDateString() + " to date";

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

      let pie_labels = [];
      let pie_data = [];

      let firstDate: Date = null;

      for (var x = 0; x < data.length; x++) {

        let thisDate: Date = new Date(data[x].firstDate);

        if (!firstDate) firstDate = thisDate;
        if (firstDate > thisDate) firstDate = thisDate;

        pie_labels.push(data[x].projectTitle);
        pie_data.push(data[x].totalHours);

      };

      this.pieChartData_SummaryByProject = {

        pieChartLabels_Test102: pie_labels,
        pieChartData_Test102: pie_data,
        pieChartTitle_Test102: "NotSet_20191029059"

      };


      if (firstDate) {
        this.pieChartData_SummaryByProject.pieChartTitle_Test102 = "Top 10 Active Projects -   " + firstDate.toLocaleDateString() + " to date";

      }


    },
      (e) => {
        console.log("20191029-0519 - dashboard.component - subscribe exception - Summary by project");
        console.log(e);

        ehu.ErrorHandlingHelpers.showHtmlErrorResponse(e);
      });

  }












}
