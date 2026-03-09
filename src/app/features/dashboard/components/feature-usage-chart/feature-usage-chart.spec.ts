import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureUsageChart } from './feature-usage-chart';

describe('FeatureUsageChart', () => {
  let component: FeatureUsageChart;
  let fixture: ComponentFixture<FeatureUsageChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUsageChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureUsageChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
