import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gen-charts',
  templateUrl: './gen-charts.component.html',
  styleUrls: ['./gen-charts.component.css']
})
export class GenChartsComponent implements AfterViewInit {
  barchart : any;
  title; 
  type;legend; yAxisLbl; xAxisLbl
  arrData = [12, 19, 3, 5, 2, 3];
  arrLabels= ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  
  constructor() {
    this.title = "Bar Chart";
   }

  ngOnInit() {
      this.type = "bar";
      this.legend = "Testing";
      this.xAxisLbl="Macs";
      this.yAxisLbl="Temperature"
      this.genearteGraphs(this.type, this.arrData, this.arrLabels, this.legend, this.xAxisLbl,this.yAxisLbl);
  }
  
  genearteGraphs(type, arrData, arrLabels, legend, xAxisLbl,yAxisLbl){
    this.barchart = new Chart('barchart', {
        type: type,
        //type: 'doughnut',
        //type: 'pie',
        //type: 'polarArea',
        //type: 'line',
        //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //data: [12, 19, 3, 5, 2, 3],
        data: {
            labels: arrLabels,
            datasets: [{
                label: legend,
                data : arrData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255,99,132,1)',
                // backgroundColor: [
                //     'rgba(255, 99, 132, 0.2)',
                //     'rgba(54, 162, 235, 0.2)',
                //     'rgba(255, 206, 86, 0.2)',
                //     'rgba(75, 192, 192, 0.2)',
                //     'rgba(153, 102, 255, 0.2)',
                //     'rgba(255, 159, 64, 0.2)'
                // ],
                // borderColor: [
                //     'rgba(255,99,132,1)',
                //     'rgba(54, 162, 235, 1)',
                //     'rgba(255, 206, 86, 1)',
                //     'rgba(75, 192, 192, 1)',
                //     'rgba(153, 102, 255, 1)',
                //     'rgba(255, 159, 64, 1)'
                // ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: xAxisLbl
                    }
                }],                
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    },
                    scaleLabel: {
                        display: true,
                        labelString: yAxisLbl
                    }
                }]
            }
        }
    });
  }

  ngAfterViewInit() {

  }
}
