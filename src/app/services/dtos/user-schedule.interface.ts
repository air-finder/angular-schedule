import { UserRole } from "../enums/user-role";
import { Person } from "./person.interface";

export interface UserSchedule {
  id: string;
  personId: string;
  login: string;
  role: UserRole;
  person: Person;
}