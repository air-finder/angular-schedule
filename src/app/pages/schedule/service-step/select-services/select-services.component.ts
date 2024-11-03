import { AfterViewInit, Component, signal } from '@angular/core';
import { FormFieldComponent } from "../../../../shared/components/form-field/form-field.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

type Service = {
  id: string;
  name: string;
}

@Component({
  selector: 'app-select-services',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormFieldComponent
  ],
  templateUrl: './select-services.component.html',
  styleUrl: './select-services.component.scss'
})
export class SelectServicesComponent implements AfterViewInit {

  form: FormGroup = new FormGroup({});

  private _services = signal<Service[]>([]);
  public services$ = this._services.asReadonly();

  ngAfterViewInit(): void {
    this.form.valueChanges.subscribe(console.log);
    [
      { id: '1', name: 'Service 1' },
      { id: '2', name: 'Service 2' },
      { id: '3', name: 'Service 3' },
      { id: '4', name: 'Service 4' },
      { id: '5', name: 'Service 5' }
    ].forEach(service => this.appendService(service));
  }

  private async appendService(service: Service) {
    this._services.update(services => [...services, service]);
    this.form.addControl(service.id, new FormControl(false));
  }
}
