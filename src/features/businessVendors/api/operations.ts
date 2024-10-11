import { apiPrivate } from 'shared/api';
import {
  TBussinessItem,
  TBussinessVendoreResponse,
  TEditBussiness,
  TGetBusinessVendorParams,
} from './types';
import useSWR from 'swr';

export const getBussiness = async (params: TGetBusinessVendorParams) => {
  const { data } = await apiPrivate<TBussinessVendoreResponse>(`business`, {
    params,
  });
  return data;
};

export const getCurrentBusiness = async (id: string) => {
  const { data } = await apiPrivate<TBussinessItem>(`business/${id}`);
  return data;
};

export const updateBusiness = async (id: string, value: TEditBussiness) => {
  await apiPrivate.patch(`business/${id}`, value);
};

export const deleteBusiness = async (id: string) => {
  await apiPrivate.delete(`business/${id}`);
};

export const uploadBusinessPhoto = async (id: string, formdata: FormData) => {
  const { data } = await apiPrivate.patch<TBussinessItem>(
    `business/${id}/photo`,
    formdata
  );
  return data;
};

export const useGetBusiness = (params: TGetBusinessVendorParams) => {
  const {
    data: businessData,
    mutate,
    isLoading,
  } = useSWR(['geyBusinessData', params], ([, par]) => getBussiness(par), {
    keepPreviousData: true,
  });
  return { businessData, mutate, isLoading };
};

export const useGetCurrentBusiness = (id?: string) => {
  const {
    data: businessInfo,
    isLoading,
    error,
  } = useSWR(id ? ['getBusinessInfo', id] : null, ([, id]) =>
    getCurrentBusiness(id)
  );
  return { businessInfo, isLoading, error };
};
