import { UserAuth } from "@models/services/dtos/user-auth";

export interface SessionUser {
  profile: UserAuth;
  scopes: string[];
}