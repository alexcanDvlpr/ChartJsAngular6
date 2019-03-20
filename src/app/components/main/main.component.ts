import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels = ['Examen Tema 1 y 2', 'Examen Tema 3 y 4', 'Examen Evaluacion', 'Trabajos'];

  barChartType = 'doughnut';

  barChartLegend = true;

  barChartData = [
    {data: [6.5, 5.9, 8.0, 9.1], label: 'Manolo'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
