import { PlanType } from "@models/pages/plans/plan-type.enum";

export interface PlanResponse {
  planType: PlanType;
  price: number;
  currency: string;
}