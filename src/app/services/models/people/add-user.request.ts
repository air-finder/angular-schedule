import { Gender } from "../../enums/gender";

export interface AddUserRequest {
  name: string;
  email: string;
  phone?: string;
  gender?: Gender;
  birthday?: number;
  login: string;
  password: string;
}