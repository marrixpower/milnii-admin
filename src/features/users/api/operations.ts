import { apiPrivate } from 'shared/api';
import { TEditUser, TGetUsersParams, TUser, TUsersResponse } from './types';
import useSWR from 'swr';

export const getUsers = async (params: TGetUsersParams) => {
  const { data } = await apiPrivate<TUsersResponse>('user', { params });
  return data;
};

export const getUser = async (id: string) => {
  const { data } = await apiPrivate<TUser>(`user/${id}`);
  return data;
};

export const editUser = async (updateData: TEditUser) => {
  const { id, newData } = updateData;
  const { data } = await apiPrivate.patch<TUser>(`user/${id}`, newData);
  return data;
};

export const deleteUser = async (id: string) => {
  await apiPrivate.delete(`user/${id}`);
};

export const uploadUserPhoto = async (id: string, formData: FormData) => {
  await apiPrivate.patch(`user/${id}/photo`, formData);
};

export const useGetUsers = (params: TGetUsersParams) => {
  const {
    data: users,
    isLoading,
    error,
    mutate,
  } = useSWR(['getUsers', params], ([, par]) => getUsers(par), {
    keepPreviousData: true,
  });
  return { users, isLoading, error, mutate };
};

export const useGetUser = (id?: string) => {
  const {
    data: user,
    isLoading,
    mutate,
  } = useSWR(id ? ['getUser', id] : null, ([, id]) => getUser(id));
  return { user, isLoading, mutate };
};
