import { Component, input } from '@angular/core';
import { SelectServicesComponent } from "./select-services/select-services.component";
import { SelectWorkerComponent } from "./select-worker/select-worker.component";

@Component({
  selector: 'app-service-step',
  standalone: true,
  imports: [SelectServicesComponent, SelectWorkerComponent],
  templateUrl: './service-step.component.html',
  styleUrl: './service-step.component.scss'
})
export class ServiceStepComponent {
  public serviceProviderId$ = input.required<string>();
}
