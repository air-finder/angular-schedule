import { UserSchedule } from "./user-schedule";

export interface ServiceWorkerDto {
  id: string;
  workerId: string;
  serviceProviderId: string;
  description: string;
  worker: UserSchedule;
}