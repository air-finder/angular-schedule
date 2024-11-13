import { Service } from "./service";

export interface ServiceStepModel {
  serviceWorkerId: string | null;
  services: Service[]
}