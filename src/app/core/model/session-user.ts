import { UserAuth } from "../../services/dtos/user-auth.interface";

export interface SessionUser {
  profile: UserAuth;
  scopes: string[];
}