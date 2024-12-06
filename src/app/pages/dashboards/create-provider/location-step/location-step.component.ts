import { AfterViewInit, Component, input } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from '@brunovbsilva/material';
import { CreateProviderSecondStepFormModel } from '@models/pages/dashboard/create-provider-form-second-step.model';
import { TranslateModule } from '@ngx-translate/core';
import { ViaCepService } from '@services/via-cep/via-cep.service';
import { NgxMaskDirective } from 'ngx-mask';
import { lastValueFrom } from 'rxjs';

@Component({
    selector: 'app-location-step',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        FormFieldComponent,
        NgxMaskDirective
    ],
    templateUrl: './location-step.component.html',
    styleUrl: './location-step.component.scss'
})
export class LocationStepComponent implements AfterViewInit {
  form = input.required<FormGroup<CreateProviderSecondStepFormModel>>();

  constructor(private _viaCepService: ViaCepService) {}

  ngAfterViewInit(): void {
    this.form().controls['zip-code'].valueChanges.subscribe(async zipCode => {
      if (zipCode && zipCode.length === 8) await this.setFullAddress(zipCode);
    });
  }
  
  private async setFullAddress(zipCode: string) {
    const address = await lastValueFrom(this._viaCepService.getAddress(zipCode))
    this.form().controls.street.setValue(address.logradouro);
    this.form().controls.neighborhood.setValue(address.bairro);
    this.form().controls.city.setValue(address.localidade);
    this.form().controls.state.setValue(address.uf);
    this.form().controls.country.setValue('Brasil');
  }
}
