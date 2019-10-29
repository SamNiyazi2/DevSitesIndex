
// 10/28/2019 06:00 am - SSN - [20191028-0558] - [001] - Timesheet dashboard

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';


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

  pie_labels: any = [['Development-a'], ['Maintenance-a'], 'Modifications-c', 'aaaa','ddadsafsadfasf','asfdafeqer','asdfasfdsadfsaf','qww','aewtrytrue','fgkhkfkk','safsafa'];
  pie_data: any = [40.1, 50.25, 349.15];



  //public pieChartLabels_Test102: Label[] = [['Development-a'], ['Maintenance-a'], 'Modifications-c'];
  //public pieChartData_Test102: SingleDataSet = [40.1, 50.25, 349.15];


  public pieChartLabels_Test102: Label[] = this.pie_labels;
  public pieChartData_Test102: SingleDataSet = this.pie_data;
  public pieCharTitle_Test102: string;

  //public pieChartLabels_Test102: Label[] = null;
  //public pieChartData_Test102: SingleDataSet = null;


  constructor(private dataService: DataService) { }

  ngOnInit() {




    for (var i = 0; i < 8; i++) {
      var r = Math.floor(Math.random() * 100);
      this.pie_data.push(r);
    }





    this.dataService.getTimelog_SummaryByDiscipline().subscribe((data: any[]) => {



      const results = data;

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


      this.pieChartLabels_Test102 = this.pie_labels;
      this.pieChartData_Test102 = this.pie_data;


      if (firstDate) {
        this.pieCharTitle_Test102 = "Work Hours by Discipline - " + firstDate.toLocaleDateString() + " to date";

      }
       

    },
      (e) => {
        console.log("20191029-0137 - dashboard.component - subscribe exception");
        console.log(e);
      });

  }

}
