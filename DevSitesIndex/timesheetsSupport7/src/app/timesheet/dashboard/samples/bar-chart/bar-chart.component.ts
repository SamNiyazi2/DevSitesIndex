import { Component, OnInit, OnChanges, Input } from '@angular/core';


// 10/28/2019 08:35 am - SSN - [20191028-0732] - [004] - Timesheet dashboard - Add available chart options samples

// 10/30/2019 06:13 am - SSN - [20191030-0613] - [001] - Revise chart creation - Use scripts


import { IBarChartData } from '../Interaces/IBarChartData';
import { ColorsList } from "../ColorsList";
import * as Chart from 'chart.js';
import { isNumber } from 'util';


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



        if (!this.barChartData) {
            return;
        }


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

                // 10/31/2019 11:47 am - SSN 
                // https://www.chartjs.org/docs/latest/configuration/tooltip.html

                tooltips: {

                    // https://www.chartjs.org/docs/latest/configuration/tooltip.html
                    custom: function (tooltipModel) {


                        //tooltipModel._bodyFontFamily = "Courier";
                        //tooltipModel.bodyFontSize = 10;

                    }
                    ,

                    // https://www.chartjs.org/docs/latest/general/interactions/modes.html#dataset
                    mode: 'point'
                    ,

                    callbacks: {
                        // 07/17/2022 01:24 am - SSN - [20220717-0051] - [002] - Tooltip
                        // https://stackoverflow.com/questions/43604597/how-to-customize-the-tooltip-of-a-chart-js-2-0-doughnut-chart
                        title: function (tooltipItem, data) {

                            var label = tooltipItem[0].label;

                            let totalHours = tooltipItem.reduce(function (previousValue: number, currentObj: any, ndx: number) {
                                return previousValue + parseFloat(currentObj.value);
                            }, 0);

                            label += `: ${totalHours.toFixed(2)}`;

                            return label;
                        },
                        label: function (tooltipItem, data) {

                            var label = tooltipItem.label + " - " + tooltipItem.value;

                            return label;

                        }
                        ,
                        footer: function (item: Chart.ChartTooltipItem[], data: Chart.ChartData) {

                            let footerValue = "";
                            if (item.length == 1) {
                                //  footerValue = item[0].label;
                            }

                            return [footerValue];
                        }


                    }
                }
                ,


                title: {
                    display: true,
                    text: this.barChartData.Master_barChartTitle,
                    //position: "left"

                },

                responsive: true, // true is the default https://www.chartjs.org/docs/latest/general/responsive.html?h=size

                // 12/04/2019 05:29 am - SSN - [20191204-0529] - [001] - Working on stablizing chart display
                //  maintainAspectRatio: false changed from true
                // https://codepen.io/chartjs/pen/YVWZbz

                maintainAspectRatio: false,

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
