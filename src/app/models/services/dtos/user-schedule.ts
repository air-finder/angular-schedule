import { UserRole } from "../enums/user-role";
import { Person } from "./person";

export interface UserSchedule {
  id: string;
  personId: string;
  login: string;
  role: UserRole;
  person: Person;
}