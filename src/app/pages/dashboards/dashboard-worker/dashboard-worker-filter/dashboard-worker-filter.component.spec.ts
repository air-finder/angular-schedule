import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkerFilterComponent } from './dashboard-worker-filter.component';

describe('DashboardWorkerFilterComponent', () => {
  let component: DashboardWorkerFilterComponent;
  let fixture: ComponentFixture<DashboardWorkerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWorkerFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWorkerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
