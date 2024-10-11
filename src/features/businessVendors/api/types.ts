import { TCategory } from 'features/categories';
import { TUser } from 'features/users/api/types';

export type TBusinessStatus = 'verified' | 'not-verified';

export type TBussinessItem = {
  _id: string;
  owner: TUser;
  increment: number;
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  site: string;
  booking: string;
  images: string[];
  description: string;
  price: number;
  status?: TBusinessStatus;
  location: {
    type: string;
    coordinates: number[];
  };
  category: TCategory;
  favorite: {
    owner: string;
    favorite: string;
    type: string;
  }[];
};

export type TBussinessVendoreResponse = {
  docs: TBussinessItem[];
  totalCount: number;
};

export type TGetBusinessVendorParams = {
  name?: string;
  ownr?: string;
  page?: number;
  skip?: number;
  limit?: string;
  order?: 1 | -1;
  sortBy?: string;
};

export type TEditBussiness = {
  images: string[];
  name: string;
  location: {
    type: string;
    coordinates: number[];
  };
  postalCode: string | undefined;
  city: string;
  address: string;
  description: string;
  phone: string;
  email: string | undefined;
  site: string | undefined;
  price: number | undefined;
  category: string;
  status?: string;
};
