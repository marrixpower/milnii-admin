import { TUsersRole } from 'features/users/api/types';

export type TEditUserForm = {
  name: string;
  email: string;
  country: { label: string; value: string };
  city: { label: string; value: string };
  oldImage: string | null;
  newImage: FileList | null;
  role: { label: string; value: TUsersRole };
  weddingDate: string;
};
