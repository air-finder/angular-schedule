export interface PostAppointmentRequest {
  serviceWorkerId: string;
  start: number;
  end: number;
  description: string;
  email?: string;
  phone?: string;
  name: string;
}