import { Appointment } from "../dtos/appointment";

export interface GetAppointmentHistoryResponse {
  serviceWorkerId: string;
  serviceWorkerName: string;
  appointments: Appointment[];
  remarkedAppointments: Appointment[];
  canceledAppointments: Appointment[];
}