import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {ErrorStateMatcher} from "@angular/material/core";
import {CustomErrorStateMatcher} from "../../configurations/angular-material/custom-error-state-matcher";

export const MaterialProviders = [
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', color: 'accent' }},
  { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher },
]
