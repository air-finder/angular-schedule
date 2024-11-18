export interface PostServiceProviderRequest {
  name: string;
  description: string;
  utcTime: number;
  businessCode?: string;
  address: AddressRequest;
}

interface AddressRequest {
  zipCode: string;
  street: string;
  number?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
}