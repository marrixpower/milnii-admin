import { useTranslation } from 'react-i18next';
import { BasicInfoWrap } from './styled';
import { SingleValue } from 'react-select';
import { ValueAutocomplete } from 'shared/Inputs/AutoComplete/types';
import { ChangeEvent, useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TEditUserForm } from 'pages/EditUser/types';
import { Container, CustomImage, Inputs, Upload } from 'shared/index';

export const BasicInfo = () => {
  const { t } = useTranslation('users');
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    watch,
    setValue,
    register,
    control,
    formState: { errors },
  } = useFormContext<TEditUserForm>();

  const oldPhoto = watch('oldImage');
  const newPhoto = watch('newImage');

  const selectlocation = async (v: SingleValue<ValueAutocomplete>) => {
    setValue('country', {
      label: v?.label || '',
      value: v?.label.split(',')[1]?.trim() || '',
    });
    setValue('city', {
      value: v?.label.split(',')[0]?.trim() || '',
      label: v?.label.split(',')[0]?.trim() || '',
    });
  };

  const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setValue('oldImage', null);
      setValue('newImage', files);
    }
  };

  const onDownloadNewPhotoClick = () => {
    inputRef.current?.click();
  };
  const generateSrc = () => {
    if (oldPhoto && !newPhoto?.length) {
      return oldPhoto;
    } else if (newPhoto?.length) {
      return URL.createObjectURL(newPhoto[0]);
    } else {
      return '';
    }
  };
  const required = t('errors:fieldRequired');
  return (
    <BasicInfoWrap>
      <label className="visually-hidden">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onPhotoChange}
        />
      </label>
      <h3>{t('basicInformation')}</h3>
      <Container $justifyContent="space-between">
        <Container width="auto" $margin="0" $flexDirection="column">
          <Container $margin="0 0 8px" as={'p'} $fontWeight="600">
            {t('image')}
          </Container>
          {generateSrc() ? (
            <CustomImage
              onDeleteClick={() => {
                setValue('newImage', null);
                setValue('oldImage', null);
              }}
              width="350px"
              height="350px"
              src={generateSrc()}
              onClick={onDownloadNewPhotoClick}
            />
          ) : (
            <Upload
              onClick={onDownloadNewPhotoClick}
              width="350px"
              height="350px"
            />
          )}
        </Container>
        <Container width="auto" $flexDirection="column" $gap="20px">
          <Inputs.Default
            $error={errors.name?.message}
            {...register('name', { required })}
            label={t('name')}
          />
          <Inputs.Default
            type="email"
            $error={errors.email?.message}
            {...register('email', { required })}
            label="Email"
          />
          <Controller
            name="country"
            control={control}
            rules={{ required }}
            render={({ field: { value } }) => (
              <Inputs.AutoComplete
                error={errors.country?.message}
                width="335px"
                label={t('location')}
                value={value}
                onChange={v => selectlocation(v)}
              />
            )}
          />
          <Inputs.Default
            label={t('weddingDate')}
            $error={errors.weddingDate?.message}
            type="date"
            {...register('weddingDate', { required })}
          />
        </Container>
      </Container>
    </BasicInfoWrap>
  );
};
