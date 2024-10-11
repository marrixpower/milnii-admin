import { BasicInfoWrap } from 'pages/EditUser/ui';
import { useTranslation } from 'react-i18next';
import { TVendoreForm } from '../../types';
import { Controller, useFormContext } from 'react-hook-form';
import { Container } from 'shared/Container';
import { Inputs } from 'shared/Inputs';
import { SingleValue } from 'react-select';
import { ValueAutocomplete } from 'shared/Inputs/AutoComplete/types';

type TProps = { options?: { label: string; value: string }[] };

export const BasicInfo = ({ options }: TProps) => {
  const { t } = useTranslation('vendors');
  const required = t('errors:fieldRequired');
  const {
    register,
    control,
    setValue,
    formState: { errors },
  } = useFormContext<TVendoreForm>();

  const selectlocation = async (v: SingleValue<ValueAutocomplete>) => {
    setValue('country', v?.label?.split(',')[1]?.trim() || '');
    setValue('city', {
      value: v?.label?.split(',')[0]?.trim() || '',
      label: v?.label || '',
    });
  };

  return (
    <BasicInfoWrap>
      <h3>{t('users:basicInformation')}</h3>
      <Container $gap="20px" $flexWrap="wrap">
        <Inputs.Default
          placeholder={t('users:name')}
          $error={errors.name?.message}
          label={t('users:name')}
          width="340px"
          {...register('name', { required })}
        />
        <Inputs.Default
          placeholder="yourmail@com"
          type="email"
          label="Email"
          width="340px"
          {...register('email')}
        />
        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, value } }) => (
            <Inputs.SelectInput
              label={t('category')}
              menuPortalTarget={document?.body}
              width="340px"
              onChange={onChange}
              value={value}
              options={options}
            />
          )}
        />
        <Controller
          control={control}
          name="city"
          render={({ field: { value } }) => (
            <Inputs.AutoComplete
              autoCompleteRequestType={['(cities)']}
              onlySity
              label={t('location')}
              value={value}
              onChange={v => selectlocation(v)}
              width="340px"
            />
          )}
        />
      </Container>
    </BasicInfoWrap>
  );
};
