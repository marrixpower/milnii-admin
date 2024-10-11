import { apiPrivate } from 'shared/api';
import {
  TCategory,
  TCategoryResponse,
  TEditCategoryData,
  TGetCategoryParams,
} from './types';
import useSWR from 'swr';

const getCategories = async (params?: TGetCategoryParams) => {
  const { data } = await apiPrivate<TCategoryResponse>(`category`, { params });
  return data;
};

export const getCategory = async (id: string) => {
  const { data } = await apiPrivate(`category/${id}`);
  return { data };
};

export const updateCategory = async ({ id, newData }: TEditCategoryData) => {
  const { data } = await apiPrivate.patch<TCategory>(`category/${id}`, newData);
  return { data };
};

export const createCategory = async (
  dataCategory: TEditCategoryData['newData']
) => {
  const { data } = await apiPrivate.post<TCategory>('category', dataCategory);
  return { data };
};

export const uploadCategoryPhoto = async (id: string, formData: FormData) => {
  await apiPrivate.patch(`category/${id}/photo`, formData);
};

export const deleteCategory = async (id: string) => {
  await apiPrivate.delete(`category/${id}`);
};

export const useGetcategories = (params?: TGetCategoryParams) => {
  const { data: categories, mutate } = useSWR(
    ['getCategories', params],
    ([, par]) => getCategories(par),
    { keepPreviousData: true, revalidateOnFocus: false }
  );
  return { categories, mutate };
};

export const useGetcategory = (id?: string) => {
  const { data: category, mutate } = useSWR(
    id ? ['getCategory', id] : null,
    ([, id]) => getCategory(id),
    { keepPreviousData: true, revalidateOnFocus: false }
  );
  return { category, mutate };
};
