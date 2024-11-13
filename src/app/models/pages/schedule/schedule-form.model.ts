import { PersonalStepForm } from "@pages/schedule/personal-step/personal-step.form";
import { ScheduleStepForm } from "@pages/schedule/schedule-step/schedule-step.form";
import { ServiceStepForm } from "@pages/schedule/service-step/service-step.form";

export interface ScheduleFormModel {
  serviceStep: ServiceStepForm;
  personalStep: PersonalStepForm;
  scheduleStep: ScheduleStepForm;
}