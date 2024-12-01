import { ServiceWorkerStatus } from "../enums/service-worker-status";
import { UserSchedule } from "./user-schedule";

export interface ServiceWorkerDto {
  id: string;
  workerId: string;
  serviceProviderId: string;
  name: string;
  description: string;
  worker: UserSchedule;
  status: ServiceWorkerStatus;
}