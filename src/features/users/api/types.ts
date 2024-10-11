export type TUsersRole = 'browsing' | 'wedding';
export type TUsersType = 'vendor' | 'user';

export type TUser = {
  firebaseId: string;
  increment: number;
  name: string;
  email: string;
  country: string;
  city: string;
  category: string;
  phone: string;
  partner: string;
  image: string;
  type: TUsersType;
  weddingDate: string;
  role: TUsersRole;
  _id: string;
  createdAt: string;
};

export type TUsersResponse = {
  docs: TUser[];
  totalCount: number;
};

export type TGetUsersParams = {
  name?: string;
  page?: number;
  skip?: number;
  limit?: string;
  order: 1 | -1;
  sortBy?: string;
  type?: TUsersType;
};

export type TEditUser = {
  id: string;
  newData: Partial<TUser>;
};
