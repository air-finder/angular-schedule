export interface ScheduleStepModel {
  serviceWorkerId: string | null;
  duration: number;
  date: string | null;
  start: number;
  end: number;
}