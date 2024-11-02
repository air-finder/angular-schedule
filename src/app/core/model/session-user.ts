import { User } from "../../services/dtos/user.interface";

export interface SessionUser {
  profile: User;
  scopes: string[];
}