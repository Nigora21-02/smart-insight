import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiGrid } from './kpi-grid';

describe('KpiGrid', () => {
  let component: KpiGrid;
  let fixture: ComponentFixture<KpiGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KpiGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KpiGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
