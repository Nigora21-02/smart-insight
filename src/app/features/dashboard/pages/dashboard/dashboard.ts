import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Subject,
  switchMap,
  map,
  startWith,
  catchError,
  of,
  Observable,
  debounceTime,
  distinctUntilChanged
} from 'rxjs';

import { DashboardDataService, Metric } from '../../services/dashboard-data.service';
import { MetricCard } from '../../components/metric-card/metric-card';
import { LoadingSpinner } from '../../../../shared/components/loading-spinner/loading-spinner';
import { SearchInput } from '../../../../shared/components/search-input/search-input';
import { KpiGrid } from '../../components/kpi-grid/kpi-grid';
import { ChartSection } from '../../components/chart-section/chart-section';
import { RecentEvents } from '../../components/recent-events/recent-events';
import { SystemHealthSummary } from '../../components/system-health-summary/system-health-summary';

interface DashboardState {
  loading: boolean;
  error: boolean;
  metrics: Metric[];
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MetricCard, LoadingSpinner, CommonModule, SearchInput, KpiGrid,ChartSection, RecentEvents, SystemHealthSummary],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  private search$ = new Subject<string>();

  onSearch(term: string) {
    this.search$.next(term);
  }

  state$: Observable<DashboardState> = this.search$.pipe(
    debounceTime(400),
    distinctUntilChanged(),
    startWith(''),

    switchMap(term => {

      const request$ = this.dashboardService.getMetrics(term);

      return request$.pipe(
        map(metrics => ({
          loading: false,
          error: false,
          metrics
        })),
        startWith({
          loading: true,
          error: false,
          metrics: []
        }),
        catchError(() =>
          of({
            loading: false,
            error: true,
            metrics: []
          })
        )
      );
    })
  );

  constructor(private dashboardService: DashboardDataService) { }
}