import { Component, Input } from '@angular/core';
import { Metric } from '../../services/dashboard-data.service';

@Component({
  selector: 'app-metric-card',
  standalone: true,
  templateUrl: './metric-card.html',
  styleUrl: './metric-card.scss',
})
export class MetricCard {
  @Input() metric!: Metric;

}
