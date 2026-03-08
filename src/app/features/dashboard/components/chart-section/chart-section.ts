import { Component } from '@angular/core';
import { UserGrowthChart } from '../user-growth-chart/user-growth-chart';

@Component({
  selector: 'app-chart-section',
  imports: [UserGrowthChart],
  templateUrl: './chart-section.html',
  styleUrl: './chart-section.scss',
})
export class ChartSection {

}
