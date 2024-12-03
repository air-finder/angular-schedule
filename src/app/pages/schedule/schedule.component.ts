import { AfterViewInit, Component, signal, viewChild } from '@angular/core';
import { ServiceStepComponent } from "./service-step/service-step.component";
import { ScheduleStepComponent } from "./schedule-step/schedule-step.component";
import { PersonalStepComponent } from "./personal-step/personal-step.component";
import { ConfirmStepComponent } from "./confirm-step/confirm-step.component";
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleForm } from './schedule.form';
import { ServiceWorkerService } from '@services/service-worker/service-worker.service';
import { ScheduleStepModel } from '@models/pages/schedule/schedule-step/schedule-step.model';
import { TimeSpanHelper } from '@helpers/time-span.helper';
import { ServiceProviderService } from '@services/service-provider/service-provider.service';
import { ScheduleService } from '@services/schedule/schedule.service';
import { DatePipe } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonComponent, StepComponent, StepperComponent } from '@brunovbsilva/material';

@Component({
    selector: 'app-schedule',
    imports: [
        StepperComponent,
        StepComponent,
        ButtonComponent,
        ServiceStepComponent,
        ScheduleStepComponent,
        PersonalStepComponent,
        ConfirmStepComponent,
        TranslateModule
    ],
    templateUrl: './schedule.component.html',
    styleUrl: './schedule.component.scss'
})
export class ScheduleComponent implements AfterViewInit {
  private _stepper = viewChild(StepperComponent);
  private _scheduleStep = viewChild<ScheduleStepComponent>('scheduleStep');

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _serviceWorkerService: ServiceWorkerService,
    private _serviceProviderService: ServiceProviderService,
    private _scheduleService: ScheduleService,
    private _router: Router,
    private _datePipe: DatePipe
  ) { }

  ngAfterViewInit(): void {
    this.form.serviceStep.valueChanges.subscribe(() => this._scheduleStep()?.resetComponent());
    
  }
  
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

  public async nextStep() {
    switch(this._stepper()?.currentIndex()) {
      case 0:
        this.scheduleStep$.update(v => {
          v.serviceWorkerId = this.form.serviceStep.serviceWorkerId.value;
          v.duration = this.getDuration();
          return v;
        })
        this._stepper()?.next();
        await this._serviceWorkerService.getAvailableDays({
          serviceWorkerId: this.scheduleStep$().serviceWorkerId!,
          appointmentDuration: TimeSpanHelper.FromMinutes(this.scheduleStep$().duration)
        });
        break;
      case 3:
        await this._scheduleService.postAppointment(this.form.GetAppointmentRequest())
          .then(() => this._router.navigate(['/']))
        break;
      default:
        this._stepper()?.next();
    }
  }

  public previousStep() {
    this._stepper()?.previous();
  }

  private getDuration() {
    return this._serviceProviderService.currentServices$().filter(service => this.getIds().includes(service.id)).reduce((acc, service) => acc + service.duration, 0);
  }

  private getIds() {
    return Object.keys(this.form.serviceStep.services.value).filter(key => this.form.serviceStep.services.value[key]);
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
