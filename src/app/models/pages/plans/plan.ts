import { Theme } from "@brunovbsilva/material";
import { PlanType } from "./plan-type.enum";

export interface Plan {
  title: string;
  price: number;
  theme: Theme;
  features: string[];
  mostPopular: boolean;
  planType: PlanType;
}