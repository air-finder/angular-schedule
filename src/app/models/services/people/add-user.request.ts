import { Gender } from "../enums/gender";

export interface AddUserRequest {
  name: string;
  email: string;
  phone?: string;
  gender?: Gender;
  birthday?: string;
  login: string;
  password: string;
}