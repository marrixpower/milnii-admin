import { OrganizationWrap } from 'pages/EditUser/ui';
import { TBusinessForm } from '../../types';
import { useTranslation } from 'react-i18next';
import { Controller, useFormContext } from 'react-hook-form';
import { SingleValue } from 'react-select';
import { ValueAutocomplete } from 'shared/Inputs/AutoComplete/types';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { Inputs } from 'shared/Inputs';
import { Container } from 'shared/Container';
import { priceRange, statusOptions } from '../../models';

export const Organization = () => {
  const { t } = useTranslation('vendors');
  const {
    register,
    control,
    watch,

    setValue,
    formState: { errors },
  } = useFormContext<TBusinessForm>();

  const selectlocation = async (v: SingleValue<ValueAutocomplete>) => {
    const placeId = v && typeof v?.value !== 'string' && v?.value.place_id;
    const res = await geocodeByPlaceId(placeId || '');
    const lat = res[0]?.geometry?.location?.lat();
    const lng = res[0]?.geometry?.location?.lng();

    setValue('location', { coordinates: [lng, lat], type: 'Point' });
    const postalCodeComponent = res[0]?.address_components.find(component =>
      component.types.includes('postal_code')
    );
    const postalCode = postalCodeComponent
      ? postalCodeComponent.long_name
      : undefined;
    setValue('postalCode', postalCode);
  };

  const selectAddress = async (v: SingleValue<ValueAutocomplete>) => {
    const addressText =
      typeof v?.value !== 'string'
        ? v?.value.structured_formatting.main_text
        : undefined;
    addressText &&
      setValue('address', { label: addressText, value: addressText });
  };

  const lat = watch('location')?.coordinates[1];
  const lng = watch('location')?.coordinates[0];
  const location = lat && lng ? { lat, lng } : undefined;

  return (
    <OrganizationWrap>
      <h3>{t('users:organization')}</h3>
      <Container $gap="25px" $flexDirection="column">
        <Controller
          control={control}
          name="city"
          render={({ field: { value, onChange } }) => (
            <Inputs.AutoComplete
              placeholder={t('enterCity')}
              onlySity
              autoCompleteRequestType={['(cities)']}
              width="340px"
              label={t('city')}
              value={value}
              onChange={v => {
                onChange(v);
                selectlocation(v);
              }}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field: { value } }) => (
            <Inputs.AutoComplete
              placeholder={t('enterAddress')}
              radius={8000}
              location={location}
              autoCompleteRequestType={['address']}
              width="340px"
              label={t('address')}
              value={value}
              onChange={v => {
                selectAddress(v);
              }}
            />
          )}
        />
        <Inputs.Default
          label={t('postalCode')}
          {...register('postalCode')}
          width="340px"
        />
        <Controller
          control={control}
          name="priceRange"
          render={({ field: { value, onChange } }) => (
            <Inputs.SelectInput
              width="340px"
              menuPortalTarget={document?.body}
              options={priceRange}
              label={t('price')}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="status"
          render={({ field: { value, onChange } }) => (
            <Inputs.SelectInput
              width="340px"
              options={statusOptions}
              label={t('status')}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Inputs.Default
          type="tel"
          $error={errors.phone?.message}
          label={t('phone')}
          {...register('phone', { required: t('errors:fieldRequired') })}
        />
      </Container>
    </OrganizationWrap>
  );
};
