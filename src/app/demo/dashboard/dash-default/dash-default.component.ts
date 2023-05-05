import { Component, OnInit } from '@angular/core';
import { SupportChartData1} from './chart/support-chart-data-1';
import { SupportChartData2} from './chart/support-chart-data-2';
// import { SeoChart1 } from './chart/seo-chart-1';
// import { SeoChart2 } from './chart/seo-chart-2';
// import { SeoChart3 } from './chart/seo-chart-3';
// import { PowerCardChart1 } from './chart/power-card-chart-1';
// import { PowerCardChart2 } from './chart/power-card-chart-2';
import * as Highcharts from 'highcharts';  

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss']
})
export class DashDefaultComponent implements OnInit {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  
  title = 'myHighchart';  
     
    data = [{  
            name: 'Javatpoint.com',  
            data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]  
         },{  
            name: 'Tutorialandexample.com',  
            data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]  
         }];  
     
    highcharts = Highcharts; 
  
    chartOptions = {     
      chart: {
         type: 'column'
       },
       title: {
         text: 'Monthly Events Attended'
       },
       xAxis: {
         categories: [
           'Jan',
           'Feb',
           'Mar',
           'Apr',
           'May',
           'Jun',
           'Jul',
           'Aug',
           'Sep',
           'Oct',
           'Nov',
           'Dec'
         ],
         crosshair: true
       },
       yAxis: {
         min: 0,
         title: {
           text: 'Events Attended'
         }
       },
       tooltip: {
         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
           '<td style="padding:0"><b>{point.y}</b></td></tr>',
         footerFormat: '</table>',
         shared: true,
         useHTML: true
       },
       plotOptions: {
         column: {
           borderWidth: 0
         }
       },
       series: [{
         name: 'Months',
         data: [2, 4, 3, 2, 10, 6, 6, 11, 5, 3,]
     
       }, ]
   }  

   // FOR PIE CHART

   PieChartOptions = {     
      chart: {
         plotBackgroundColor: null,
         plotBorderWidth: null,
         plotShadow: false,
         type: 'pie'
     },
     title: {
         text: 'Score'
     },
     tooltip: {
         pointFormat: '{series.name}: <b>{point.y}</b>'
     },
     accessibility: {
         point: {
             valueSuffix: '%'
         }
     },
     plotOptions: {
         pie: {
            size:180,
             allowPointSelect: false,
             cursor: 'pointer',
             dataLabels: {
                 enabled: true,
                 format: '<b>{point.name}</b>: {point.y}'
             }
         }
     },
     series: [{
         name: 'Brands',
         // colorByPoint: true,
         data: [{
             name: 'Cultural',
             y: 210,
             sliced: true,
             selected: true
         }, {
             name: 'Department',
             y: 32
         }, {
             name: 'TA',
             y: 20
         }, {
             name: '',
             y: 12
         }, {
             name: 'Other Activities',
             y: '100'
         }
         ]
     }]

   }  
  
  constructor() {
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    // this.seoChartData1 = SeoChart1.seoChartData;
    // this.seoChartData2 = SeoChart2.seoChartData;
    // this.seoChartData3 = SeoChart3.seoChartData;
    // this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    // this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    
  }

  ngOnInit() {

  }

}
