import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ServiceProviderService } from '../../../../services/service-provider.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ServiceWorkerDto } from '../../../../services/dtos/service-worker.interface';
import { FormFieldComponent } from "../../../../shared/components/form-field/form-field.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-select-worker',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent,
    TranslateModule
],
  templateUrl: './select-worker.component.html',
  styleUrl: './select-worker.component.scss'
})
export class SelectWorkerComponent implements OnInit {
  form: FormGroup = new FormGroup({
    worker: new FormControl('', Validators.required)
  });

  public serviceProviderId$ = input.required<string>();
  private _providerService = inject(ServiceProviderService);

  private _workers = signal<ServiceWorkerDto[]>([]);
  public workers$ = this._workers.asReadonly();
  
  ngOnInit(): void {
    this.getWorkers(this.serviceProviderId$())
      .then(workers => this._workers.set(workers.result))
      .finally(() => console.log(this.workers$()));

    this.form.valueChanges.subscribe(console.log);
  }

  private async getWorkers(providerId: string) {
    return await this._providerService.getWorkers(providerId);
  }
}