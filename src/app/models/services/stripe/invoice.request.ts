import { PlanType } from "@models/pages/plans/plan-type.enum";

export interface InvoiceRequest {
  planType: PlanType,
  userId: string
}