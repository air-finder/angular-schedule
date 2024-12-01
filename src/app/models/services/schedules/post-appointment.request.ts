export interface PostAppointmentRequest {
  serviceWorkerId: string;
  start: number;
  end: number;
  services: string;
  email?: string;
  phone?: string;
  name: string;
}