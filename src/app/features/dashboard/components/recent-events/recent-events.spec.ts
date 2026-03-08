import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentEvents } from './recent-events';

describe('RecentEvents', () => {
  let component: RecentEvents;
  let fixture: ComponentFixture<RecentEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentEvents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
