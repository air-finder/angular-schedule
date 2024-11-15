export interface BaseResponse<T> {
  errors: string[];
  result: T;
  success: boolean;
}