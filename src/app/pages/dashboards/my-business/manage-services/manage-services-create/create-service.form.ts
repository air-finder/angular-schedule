import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CreateServiceFormModel } from "@models/pages/dashboard/service-create-form.model";
import { PostServiceProviderServiceRequest } from "@models/services/service-providers/post-service-provider-service.request";
import { CustomValidators } from "@validators/custom-validators";

export class CreateServiceForm extends FormGroup<CreateServiceFormModel> {
  constructor() {
    super({
      name: new FormControl<string | null>(null, [Validators.required, CustomValidators.nameValidator]),
      description: new FormControl<string | null>(null, [Validators.required]),
      price: new FormControl<string | null>('0', [Validators.required]),
      duration: new FormControl<number | null>(0, [Validators.required]),
    });
  }

  public getRequest(serviceProviderId: string): PostServiceProviderServiceRequest {
    return {
      serviceProviderId: serviceProviderId,
      name: this.controls.name.value!,
      description: this.controls.description.value!,
      price: Number(this.controls.price.value!.replace('.', '')),
      duration: this.controls.duration.value!
    }
  }
}