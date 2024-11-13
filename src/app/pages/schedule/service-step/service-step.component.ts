import { Component, input, model } from '@angular/core';
import { SelectServicesComponent } from "./select-services/select-services.component";
import { SelectWorkerComponent } from "./select-worker/select-worker.component";
import { ServiceStepModel } from '../../../models/pages/schedule/service-step/service-step.model';
import { ServiceStepForm } from './service-step.form';

@Component({
  selector: 'app-service-step',
  standalone: true,
  imports: [SelectServicesComponent, SelectWorkerComponent],
  templateUrl: './service-step.component.html',
  styleUrl: './service-step.component.scss'
})
export class ServiceStepComponent {
  public serviceProviderId$ = input.required<string>();
  form = input.required<ServiceStepForm>();
}
