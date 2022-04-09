import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import ApexCharts from 'apexcharts'

@Component({
  selector: 'app-questionnaire-stats',
  templateUrl: './app-questionnaire-stats.pug',
  styleUrls: ['./app-questionnaire-stats.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppQuestionnaireStatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      chart: {
        type: 'boxPlot',
        width: '600px'
      },
      series: [{
        name: 'Risk Level',
        type: 'scatter',
        data: [
          {
            x: 10,
            y: 1
          },
          {
            x: 20,
            y: 2
          },
          {
            x: 30,
            y: 3
          },
          {
            x: 40,
            y: 4
          },
          {
            x: 50,
            y: 5
          },
          {
            x: 60,
            y: 6
          }
        ]
      }],
      xaxis: {
        type: 'string',
        tooltip: {
          formatter: function(val: string) {
            return `${val} questions`
          }
        }
      },
      tooltip: {
        shared: true,
        intersect: false
      }
    }

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  }
}
