import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KpiCard } from '../kpi-card/kpi-card';
interface Kpi {
  title: string;
  value: string | number;
  change: number;
  icon: string;
}
@Component({
  selector: 'app-kpi-grid',
  standalone: true,
  imports: [CommonModule, KpiCard],
  templateUrl: './kpi-grid.html',
  styleUrl: './kpi-grid.scss',
})
export class KpiGrid {
 

kpis: Kpi[] = [
  { title: 'Active Users', value: 1240, change: 5.2, icon: 'people' },
  { title: 'Revenue', value: '$18,200', change: 3.8, icon: 'revenue' },
  { title: 'API Latency', value: '320ms', change: -12.4, icon: 'latency' },
  { title: 'Error Rate', value: '1.2%', change: -0.4, icon: 'error' }
];
}
