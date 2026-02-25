import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs';

export interface Metric {
  name: string;
  value: number;
  change: number;
}

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  getMetrics(): Observable<Metric[]> {
    const mockData: Metric[] = [
      { name: 'Active Users', value: 1240, change: 5.2 },
      { name: 'System Uptime (%)', value: 99.9, change: 0.1 },
      { name: 'API Response (ms)', value: 320, change: -12.4 },
      { name: 'Revenue ($)', value: 18200, change: 3.8 }
    ];

    return of(mockData).pipe(delay(2500));  // Simulate network delay
  }
}