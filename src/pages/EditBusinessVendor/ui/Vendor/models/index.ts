import { UseFormReset } from 'react-hook-form';
import { TVendoreForm } from '../types';
import { TUser } from 'features/users/api/types';
import { editUser } from 'features/users';

export const setDefaultValue = async (
  value: TUser,
  reset: UseFormReset<TVendoreForm>,
  categoryList?: { label: string; value: string }[]
) => {
  const categoryName = categoryList?.find(el => el.value === value.category);
  reset({
    name: value.name,
    email: value.email,
    city: { label: `${value.city}, ${value.country}`, value: value.city },
    country: value.country,
    category: categoryName,
  });
};

export const updateUserData = async (id: string, value: TVendoreForm) => {
  const newData = {
    email: value.email,
    name: value.name,
    category: value.category.value,
    country: value.country,
    city: value.city.value,
  };
  await editUser({ id, newData });
};
