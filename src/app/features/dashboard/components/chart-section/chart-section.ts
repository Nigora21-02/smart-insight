import { Component } from '@angular/core';
import { UserGrowthChart } from '../user-growth-chart/user-growth-chart';
import { FeatureUsageChart } from '../feature-usage-chart/feature-usage-chart';

@Component({
  selector: 'app-chart-section',
  imports: [UserGrowthChart, FeatureUsageChart],
  templateUrl: './chart-section.html',
  styleUrl: './chart-section.scss',
})
export class ChartSection {

}
