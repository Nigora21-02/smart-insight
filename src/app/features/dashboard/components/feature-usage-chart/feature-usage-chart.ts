import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables, ChartOptions } from 'chart.js';
import { ChartCard } from '../chart-card/chart-card';

@Component({
  selector: 'app-feature-usage-chart',
  standalone: true,
  imports: [ChartCard],
  templateUrl: './feature-usage-chart.html',
  styleUrls: ['./feature-usage-chart.scss']
})
export class FeatureUsageChart implements AfterViewInit {

  @ViewChild('chartCanvas')
  chartCanvas!: ElementRef<HTMLCanvasElement>;

  private chart!: Chart;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  /**
   * Helper: get CSS variable from :root
   */
  private getVar(name: string): string {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
  }

  private initChart(): void {

    const primary = this.getVar('--color-primary');
    const textSecondary = this.getVar('--color-text-secondary');
    const borderColor = this.getVar('--color-border');


    const options: ChartOptions = {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: this.getVar('--color-text-primary'),
          titleColor: this.getVar('--color-surface'),
          bodyColor: this.getVar('--color-surface')
        }
      },

      scales: {

        x: {
          grid: {
            display: false
          },
          ticks: {
            color: textSecondary,
            font: {
              size: 11
            },
          },
          border: {
            display: false
          }
        },

        y: {
          beginAtZero: true,
          grid: {
            color: borderColor,
            drawOnChartArea: true,
            drawTicks: false
          },
          ticks: {
            color: textSecondary,
            stepSize: 1100,
            font: {
              size: 11
            }
          },
          border: {
            display: false
          }
        }

      }
    };

    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',

      data: {
        labels: [
          'Dashboard',
          'Reports',
          'API',
          'Settings',
          'Billing',
          'Integrations'
        ],

        datasets: [
          {
            label: 'Usage',
            data: [4200, 3100, 2800, 1800, 1200, 900],

            backgroundColor: primary,
            borderSkipped: false,
            barThickness: window.innerWidth < 600 ? 32 : 46,
            borderRadius: 4
          }
        ]
      },

      options
    });
  }
}