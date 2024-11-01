import { authorizeInterceptor } from "./authorize.interceptor";
import { toastInterceptor } from "./toast.interceptor";

export const HttpInterceptors = [
  toastInterceptor,
  authorizeInterceptor
];