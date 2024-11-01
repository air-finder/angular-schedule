import { AbstractControl, FormGroupDirective, NgForm } from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

export class CustomErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
        if(control?.dirty) return control.errors != null;
        return false;
    }
}
