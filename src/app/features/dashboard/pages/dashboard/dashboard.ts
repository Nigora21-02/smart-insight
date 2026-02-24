import { Component, OnInit } from '@angular/core';
import { DashboardDataService, Metric } from '../../services/dashboard-data.service';
import { MetricCard } from '../../components/metric-card/metric-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MetricCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  metrics: Metric[] = [];

  constructor(private dashboardService: DashboardDataService) {}

  ngOnInit(): void {
    this.dashboardService.getMetrics().subscribe(data => {
      this.metrics = data;
    });
  }

}