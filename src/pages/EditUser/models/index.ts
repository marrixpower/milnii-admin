import { UseFormReset } from 'react-hook-form';
import { TEditUserForm } from '../types';
import { TUser } from 'features/users/api/types';
import { capitalizeFirstLetter } from 'shared/utils';
import { format, formatISO } from 'date-fns';
import { editUser, uploadUserPhoto } from 'features/index';

const imgPath = import.meta.env.VITE_IMG_URL;

export const setDefaultValue = (
  value: TUser,
  reset: UseFormReset<TEditUserForm>
) => {
  reset({
    name: value.name,
    email: value.email,
    country: { label: `${value.city}, ${value.country}`, value: value.country },
    city: { label: value.city, value: value.city },
    oldImage: value.image ? `${imgPath}/user/${value.image}` : null,
    role: value.role
      ? { label: capitalizeFirstLetter(value.role), value: value.role }
      : undefined,
    weddingDate: value.weddingDate
      ? format(new Date(value.weddingDate), 'yyyy-MM-dd')
      : '',
  });
};

export const updateUserData = async (data: TEditUserForm, id: string) => {
  if (data.newImage?.length) {
    const formData = new FormData();
    formData.append('image', data.newImage[0]);
    await uploadUserPhoto(id, formData);
  }
  const newData = {
    weddingDate: data.weddingDate
      ? formatISO(new Date(data.weddingDate))
      : undefined,
    name: data.name,
    email: data.email,
    country: data.country.value,
    city: data.city.label,
    role: data.role.value,
  };
  await editUser({ id, newData });
};
