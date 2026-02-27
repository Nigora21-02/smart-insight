import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemHealthSummary } from './system-health-summary';

describe('SystemHealthSummary', () => {
  let component: SystemHealthSummary;
  let fixture: ComponentFixture<SystemHealthSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemHealthSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemHealthSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
