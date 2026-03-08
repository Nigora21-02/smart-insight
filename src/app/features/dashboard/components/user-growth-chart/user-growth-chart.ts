import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartCard } from '../chart-card/chart-card';

@Component({
  selector: 'app-user-growth-chart',
  standalone: true,
  imports: [ChartCard],
  templateUrl: './user-growth-chart.html',
  styleUrls: ['./user-growth-chart.scss'],
})
export class UserGrowthChart implements AfterViewInit {

  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: this.getChartData(),
      options: this.getChartOptions()
    });
  }

  private getChartData() {
    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue('--chart-primary-rgb').trim();
    const primaryRgb = rootStyles.getPropertyValue('--chart-primary-rgb').trim();
    return {
      labels: ['Day 1', 'Day 6', 'Day 11', 'Day 16', 'Day 21', 'Day 26'],
      datasets: [
        {
          label: 'Users',
          data: [9000, 12000, 11000, 13500, 15000, 13000],
          borderColor: `rgba(${primaryRgb})`,
          backgroundColor: `rgba(${primaryRgb}, 0.15)`,
          tension: 0.4,
          fill: true,
          borderwidth: 2,
          pointRadius: 2.5,
          pointBackgroundColor: `rgba(${primaryRgb})`,
          pointHoverRadius: 5
        }
      ]
    };
  }

  private getChartOptions() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },


      scales: {
        x: {
          grid: {
            color: 'rgba(0,0,0,0.04)'
          },
          border: {
            display: false
          }
        },
        y: {
          grid: {
            color: 'rgba(0,0,0,0.04)'
          },
          border: {
            display: false
          }
        }
      }
    };
  }
}