import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AddWorkerRequest } from "@models/services/service-providers/add-worker.request";
import { CustomValidators } from "@validators/custom-validators";

export interface AddWorkerFormModel {
  "work-start": FormControl<string | null>;
  "work-end": FormControl<string | null>;
  "add-me": FormControl<boolean | null>;
  worker?: FormGroup<WorkerFormModel>;
}

export interface WorkerFormModel {
  email: FormControl<string | null>;
  name: FormControl<string | null>;
}

export class AddWorkerForm extends FormGroup<AddWorkerFormModel> {

  get worker() { return this.controls.worker as WorkerForm }
  get addMe() { return this.controls["add-me"] }
  get workStart() { return this.controls["work-start"] }
  get workEnd() { return this.controls["work-end"] }

  constructor() {
    super({
      "work-start": new FormControl<string | null>(null, [Validators.required]),
      "work-end": new FormControl<string | null>(null, [Validators.required]),
      "add-me": new FormControl<boolean | null>(false),
      worker: new WorkerForm()
    })

    this.controls["add-me"].valueChanges.subscribe(value => {
      if (!value) this.addControl("worker", new WorkerForm())
      else if(this.controls.worker) this.removeControl("worker");
    });
  }

  public GetRequest() : AddWorkerRequest {
    return {
      workStart: this.workStart.value!,
      workEnd: this.workEnd.value!,
      addMe: !!this.addMe.value,
      worker: this.controls.worker ? this.worker.GetWorker() : undefined
    }
  }
}

export class WorkerForm extends FormGroup<WorkerFormModel> {
  constructor() {
    super({
      email: new FormControl<string | null>(null, [Validators.required, CustomValidators.emailValidator]),
      name: new FormControl<string | null>(null, [Validators.required, CustomValidators.nameValidator])
    })
  }

  public GetWorker() {
    return {
      email: this.controls.email.value!,
      name: this.controls.name.value!
    }
  }
}