import { UserRole } from "../enums/user-role";

export interface User {
  id: string;
  personId: string;
  login: string;
  role: UserRole;
}