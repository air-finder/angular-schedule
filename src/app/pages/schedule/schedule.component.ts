import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { StepperComponent } from "../../shared/components/stepper/stepper.component";
import { StepComponent } from "../../shared/components/stepper/step/step.component";
import { SelectServicesComponent } from "./service-step/select-services/select-services.component";
import { SelectWorkerComponent } from "./service-step/select-worker/select-worker.component";
import { SelectDayComponent } from "./schedule-step/select-day/select-day.component";
import { SelectTimeComponent } from "./schedule-step/select-time/select-time.component";
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ServiceStepComponent } from "./service-step/service-step.component";
import { ScheduleStepComponent } from "./schedule-step/schedule-step.component";
import { PersonalStepComponent } from "./personal-step/personal-step.component";
import { ConfirmStepComponent } from "./confirm-step/confirm-step.component";
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProviderService } from '../../services/service-provider.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    StepperComponent,
    StepComponent,
    ButtonComponent,
    ServiceStepComponent,
    ScheduleStepComponent,
    PersonalStepComponent,
    ConfirmStepComponent
],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {
  private _activatedRoute = inject(ActivatedRoute);

  private _serviceProviderId = signal<string>(
    this._activatedRoute.snapshot.params['id']
  );
  public serviceProviderId$ = this._serviceProviderId.asReadonly();
}
