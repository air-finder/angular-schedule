import { Gender } from "../enums/gender";

export interface FirstAccessRequest {
  userId: string;
  login: string;
  password: string;
  birthday: string;
  gender: Gender;
  phone: string;
}