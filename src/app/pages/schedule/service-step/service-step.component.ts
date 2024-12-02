import { Component, input } from '@angular/core';
import { SelectServicesComponent } from "./select-services/select-services.component";
import { SelectWorkerComponent } from "./select-worker/select-worker.component";
import { ServiceStepForm } from './service-step.form';

@Component({
    selector: 'app-service-step',
    imports: [SelectServicesComponent, SelectWorkerComponent],
    templateUrl: './service-step.component.html',
    styleUrl: './service-step.component.scss'
})
export class ServiceStepComponent {
  public serviceProviderId$ = input.required<string>();
  form = input.required<ServiceStepForm>();
  latitude = 51.678418;
  longitude = 7.809007;
  zoom = 8;
  center = { lat: this.latitude, lng: this.longitude };
}
