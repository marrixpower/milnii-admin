import {
  TBussinessItem,
  updateBusiness,
  uploadBusinessPhoto,
} from 'features/index';
import { UseFormReset } from 'react-hook-form';
import { TBusinessForm } from '../types';
import { capitalizeFirstLetter } from 'shared/utils';
import { t } from 'i18next';

export const priceRange = [
  { label: '$0 - $500', value: '0' },
  { label: '$500 - $1,000', value: '500' },
  { label: '$1,000 - $2,500', value: '1000' },
  { label: '$2,500 - $5,000', value: '2500' },
  { label: '$5,000 - $10,000', value: '5000' },
  { label: '$10,000 - $20,000', value: '10000' },
  { label: '$20,000 - $50,000', value: '20000' },
  { label: '$50,000+', value: '50000' },
];

export const statusOptions = [
  { label: t('vendors:verified'), value: 'verified' },
  { label: t('vendors:notVerified'), value: 'not-verified' },
];

export const setDefaultValue = (
  value: TBussinessItem,
  reset: UseFormReset<TBusinessForm>
) => {
  const categoryName = value.category?.name?.find(
    item => item.lang === 'en'
  )?.value;
  reset({
    oldImages: value.images || [],
    name: value.name,
    location: value.location,
    postalCode: value.postalCode || undefined,
    city: value.city ? { label: value.city, value: '' } : undefined,
    address: value.address ? { label: value.address, value: '' } : undefined,
    description: value.description,
    phone: value.phone,
    email: value.email || undefined,
    site: value.site,
    priceRange: priceRange.find(el => +el.value === +value.price),
    category: {
      label: capitalizeFirstLetter(categoryName),
      value: value.category._id,
    },
    status:
      statusOptions.find(el => el.value === value.status) || statusOptions[1],
  });
};

export const updateBusinessData = async (id: string, data: TBusinessForm) => {
  let photoString: string[] = [...data.oldImages];
  if (data.newImages?.length) {
    const formData = new FormData();
    data.newImages?.map(item => formData.append('images', item));
    const newData = await uploadBusinessPhoto(id, formData);
    photoString = [...data.oldImages, ...newData.images];
  }
  const updateData = {
    images: photoString,
    name: data.name,
    location: data.location,
    postalCode: data.postalCode,
    city: data.city.label,
    address: data.address.label,
    description: data.description,
    phone: data.phone,
    email: data.email || undefined,
    site: data.site || undefined,
    price: data.priceRange?.value ? +data.priceRange?.value : undefined,
    category: data.category.value,
    status: data.status.value,
  };
  await updateBusiness(id, updateData);
};
