export interface AddWorkerRequest{
  workStart: string;
  workEnd: string;
  addMe: boolean;
  worker?: Worker;
}

interface Worker {
  name: string;
  email: string;
}