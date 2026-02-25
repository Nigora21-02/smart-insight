import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, switchMap, map, startWith, catchError, of, Observable, tap } from 'rxjs';

import { DashboardDataService, Metric } from '../../services/dashboard-data.service';
import { MetricCard } from '../../components/metric-card/metric-card';

interface DashboardState {
  loading: boolean;
  error: boolean;
  metrics: Metric[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MetricCard, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  private refreshTrigger$ = new Subject<void>();

  state$: Observable<DashboardState> = this.refreshTrigger$.pipe(

    tap(() => console.log('🟣 Trigger emitted')),

    startWith(void 0),

    switchMap(() =>
      this.dashboardService.getMetrics().pipe(

        tap(() => console.log('🟡 API call started')),

        map((metrics: Metric[]) => ({
          loading: false,
          error: false,
          metrics
        })),

        tap(state => console.log('🟢 Success state:', state)),

        startWith({
          loading: true,
          error: false,
          metrics: []
        }),

        tap(state => {
          if (state.loading) {
            console.log('🔵 Loading state emitted');
          }
        }),

        catchError((error) => {
          console.log('🔴 Error caught:', error);
          return of({
            loading: false,
            error: true,
            metrics: []
          });
        })
      )
    )
  );

  constructor(private dashboardService: DashboardDataService) {
    console.log('🧱 Dashboard component created');
  }

  refresh() {
    console.log('🔘 Refresh button clicked');
    this.refreshTrigger$.next();
  }

}