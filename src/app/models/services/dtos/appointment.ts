import { AppointmentStatus } from "../enums/appointment-status";

export interface Appointment {
  id: string;
  serviceWorkerId: string;
  start: number;
  end: number;
  description: string;
  status: AppointmentStatus;
  email?: string;
  phone?: string;
  name: string;
}