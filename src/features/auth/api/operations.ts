import { apiPrivate } from 'shared';
import { LoginTypes, Logirnes } from './types';

export const login = async (dataAuth: LoginTypes) => {
  const { data } = await apiPrivate.post<Logirnes>(`auth/login`, dataAuth);
  return data;
};

export const logOut = async () => {
  await apiPrivate.post('auth/logout');
};

export const refresh = async () => {
  const { data } = await apiPrivate.post<Logirnes>('auth/refresh');
  return data;
};
