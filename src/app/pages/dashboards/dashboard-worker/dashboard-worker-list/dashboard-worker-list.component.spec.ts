import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWorkerListComponent } from './dashboard-worker-list.component';

describe('DashboardWorkerListComponent', () => {
  let component: DashboardWorkerListComponent;
  let fixture: ComponentFixture<DashboardWorkerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWorkerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWorkerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
