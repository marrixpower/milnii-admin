import { useTranslation } from 'react-i18next';
import { OrganizationWrap } from './styled';
import { Controller, useFormContext } from 'react-hook-form';
import { TEditUserForm } from 'pages/EditUser/types';
import { Inputs } from 'shared/Inputs';
import { TUsersRole } from 'features/users/api/types';

export const Organization = () => {
  const { t } = useTranslation('users');

  const {
    control,
    formState: { errors },
  } = useFormContext<TEditUserForm>();

  const roles: { label: string; value: TUsersRole }[] = [
    { label: 'Wedding', value: 'wedding' },
    { label: 'Browsing', value: 'browsing' },
  ];

  return (
    <OrganizationWrap>
      <h3>{t('organization')}</h3>
      <Controller
        rules={{ required: t('errors:fieldRequired') }}
        control={control}
        name="role"
        render={({ field: { value, onChange } }) => (
          <Inputs.SelectInput
            width="380px"
            error={errors.role?.message}
            onChange={onChange}
            value={value}
            label={t('role')}
            options={roles}
          />
        )}
      />
    </OrganizationWrap>
  );
};
