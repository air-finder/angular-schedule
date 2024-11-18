import { FormGroup } from "@angular/forms";
import { CreateProviderFormModel } from "@models/pages/dashboard/create-provider-form.model";
import { ProviderStepForm } from "./provider-step/provider-step.form";
import { LocationStepForm } from "./location-step/location-step.form";
import { PostServiceProviderRequest } from "@models/services/service-providers/post-service-provider.request";
import { TimezoneHelper } from "@helpers/timezone.helper";

export class CreateProviderForm extends FormGroup<CreateProviderFormModel> {

  get provider() { return this.controls.provider as ProviderStepForm; }
  get location() { return this.controls.location as LocationStepForm; }

  constructor() {
    super({
      provider: new ProviderStepForm(),
      location: new LocationStepForm()
    })
  }

  getRequest(): PostServiceProviderRequest {
    return {
      name: this.provider.controls.name.value!,
      description: this.provider.controls.description.value!,
      utcTime: TimezoneHelper.GetTimezoneNumber(),
      businessCode: this.provider.controls['business-code'].value,
      address: this.location.getRequest()
    } as PostServiceProviderRequest;
  }
}