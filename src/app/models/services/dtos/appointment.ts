import { AppointmentStatus } from "../enums/appointment-status";
import { Service } from "./service";

export interface Appointment {
  id: string;
  serviceWorkerId: string;
  start: number;
  end: number;
  services: Service[];
  status: AppointmentStatus;
  email?: string;
  phone?: string;
  name: string;
}