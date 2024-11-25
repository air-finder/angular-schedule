import { UserRole } from "../enums/user-role";
import { ServiceProviderDto } from "./service-provider";
import { ServiceWorkerDto } from "./service-worker";

export interface UserAuth {
  id: string;
  personId: string;
  login: string;
  role: UserRole;
  name: string;
  email: string;
  serviceProvider?: ServiceProviderDto;
  servideWorker?: ServiceWorkerDto;
}