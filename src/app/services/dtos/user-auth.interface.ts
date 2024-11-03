import { UserRole } from "../enums/user-role";

export interface UserAuth {
  id: string;
  personId: string;
  login: string;
  role: UserRole;
  name: string;
  email: string;
}