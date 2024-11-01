import { Gender } from "../enums/gender";
import { User } from "./user.interface";

export interface Person {
  id: string;
  name: string;
  email: string;
  birthday: Date;
  personalCode: string;
  gender: Gender;
  phone: string;
  users: User[];
}