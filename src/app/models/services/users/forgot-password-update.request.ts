export interface ForgotPasswordUpdateRequest {
  user: string;
  code: string;
  password: string;
}