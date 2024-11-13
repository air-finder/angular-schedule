import { Component, inject, signal, viewChild } from '@angular/core';
import { ServiceStepComponent } from "./service-step/service-step.component";
import { ScheduleStepComponent } from "./schedule-step/schedule-step.component";
import { PersonalStepComponent } from "./personal-step/personal-step.component";
import { ConfirmStepComponent } from "./confirm-step/confirm-step.component";
import { ActivatedRoute } from '@angular/router';
import { ScheduleForm } from './schedule.form';
import { StepperComponent } from '@components/stepper/stepper.component';
import { StepComponent } from '@components/stepper/step/step.component';
import { ButtonComponent } from '@components/button/button.component';
import { ServiceWorkerService } from '@services/service-worker.service';
import { ScheduleStepModel } from '@models/pages/schedule/schedule-step/schedule-step.model';
import { TimeSpanHelper } from '@helpers/time-span';
import { ServiceProviderService } from '@services/service-provider.service';

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
  private _stepper = viewChild(StepperComponent);
  private _activatedRoute = inject(ActivatedRoute);
  private _serviceWorkerService = inject(ServiceWorkerService);
  private _serviceProviderService = inject(ServiceProviderService);
  private _serviceProviderId = signal<string>(this._activatedRoute.snapshot.params['id']);
  protected serviceProviderId$ = this._serviceProviderId.asReadonly();
  protected form = new ScheduleForm();

  protected scheduleStep$ = signal<ScheduleStepModel>({
    serviceWorkerId: null,
    duration: 0,
    date: null,
    start: 0,
    end: 0
  });

  public nextStep() {
    if(this._stepper()?.currentIndex() === 0) {
      this.scheduleStep$.update(v => {
        v.serviceWorkerId = this.form.serviceStep.serviceWorkerId.value;
        v.duration = this.getDuration();
        return v;
      })
      this._serviceWorkerService.getAvailableDays({
        serviceWorkerId: this.scheduleStep$().serviceWorkerId!,
        appointmentDuration: TimeSpanHelper.FromMinutes(this.scheduleStep$().duration)
      })
    }
    this._stepper()?.next();
  }

  public previousStep() {
    this._stepper()?.previous();
  }

  private getDuration() {
    const ids = Object.keys(this.form.serviceStep.services.value).filter(key => this.form.serviceStep.services.value[key]);
    return this._serviceProviderService.currentServices$().filter(service => ids.includes(service.id)).reduce((acc, service) => acc + service.duration, 0);
  }

  public getDisabled() {
    switch(this._stepper()?.currentIndex()) {
      case 0:
        return this.form.serviceStep.invalid;
      case 1:
        return this.form.scheduleStep.invalid;
      case 2:
        return this.form.personalStep.invalid;
      default:
        return this.form.invalid;
    }
  }
}
