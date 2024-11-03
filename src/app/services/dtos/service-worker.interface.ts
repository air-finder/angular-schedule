import { UserSchedule } from "./user-schedule.interface";

export interface ServiceWorkerDto {
  id: string;
  workerId: string;
  serviceProviderId: string;
  description: string;
  worker: UserSchedule;

}