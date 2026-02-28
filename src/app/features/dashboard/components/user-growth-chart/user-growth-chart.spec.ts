import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGrowthChart } from './user-growth-chart';

describe('UserGrowthChart', () => {
  let component: UserGrowthChart;
  let fixture: ComponentFixture<UserGrowthChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserGrowthChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGrowthChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
