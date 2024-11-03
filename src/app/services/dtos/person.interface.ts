import { Gender } from "../enums/gender";

export interface Person {
  id: string;
  name: string;
  email: string;
  gender: Gender;
  phone?: string;
}