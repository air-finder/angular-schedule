import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleStepComponent } from './schedule-step.component';

describe('ScheduleStepComponent', () => {
  let component: ScheduleStepComponent;
  let fixture: ComponentFixture<ScheduleStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
