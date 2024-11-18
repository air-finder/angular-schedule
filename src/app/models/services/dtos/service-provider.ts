import { ServiceProviderType } from "../enums/service-provider-type";

export interface ServiceProviderDto {
  id: string;
  name: string;
  description: string;
  type: ServiceProviderType;
  addressId?: string;
  managerId: string;
}