import { BasicInfoWrap } from 'pages/EditUser/ui';
import { Controller, useFormContext } from 'react-hook-form';
import { TBusinessForm } from '../../types';
import { Container, CustomImage, Inputs, Upload } from 'shared/index';
import { DescriptionWrap, PhotoWrap } from './styled';
import { useTranslation } from 'react-i18next';
import { usePhotoLogic } from './usePhotoLogic';
import { useGetcategories } from 'features/index';

const imgPath = import.meta.env.VITE_IMG_URL;

export const BasicInfo = () => {
  const { t } = useTranslation('vendors');
  const {
    register,
    control,
    watch,
    trigger,
    setValue,
    formState: { errors },
  } = useFormContext<TBusinessForm>();

  const {
    onDownloadNewPhotoClick,
    inputRef,
    onPhotoChange,
    onDeleteOldFile,
    onDeleteNewPhoto,
    newPhotoArray,
  } = usePhotoLogic(watch, setValue, trigger);

  register('newImages', {
    required: {
      value: !newPhotoArray?.length && !watch('oldImages')?.length,
      message: 'this field is required',
    },
  });

  const required = t('errors:fieldRequired');
  const { categories } = useGetcategories({ limit: '60' });
  return (
    <BasicInfoWrap>
      <h3>{t('users:basicInformation')}</h3>
      <label className="visually-hidden">
        <input
          multiple
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onPhotoChange}
        />
      </label>
      <PhotoWrap>
        <p>{t('photo')}</p>
        <Container $gap="25px" $flexWrap="wrap">
          {watch('oldImages')?.map(item => (
            <CustomImage
              withDeleteIcon
              onDeleteClick={() => onDeleteOldFile(item)}
              key={item}
              src={`${imgPath}business/${item}`}
            />
          ))}
          {newPhotoArray?.map((item, index) => (
            <CustomImage
              withDeleteIcon
              onDeleteClick={() => onDeleteNewPhoto(index)}
              key={item.name}
              src={URL.createObjectURL(item)}
            />
          ))}
          <Upload
            error={!!errors?.newImages?.message}
            onClick={onDownloadNewPhotoClick}
          />
        </Container>
        <Container $margin="25px 0 0 " $gap="25px" $flexWrap="wrap">
          <Inputs.Default
            $error={errors.name?.message}
            width="340px"
            label={t('businessName')}
            {...register('name', { required })}
          />
          <Inputs.Default
            placeholder="yourmail@com"
            type="email"
            width="340px"
            label="Email"
            {...register('email')}
          />
          <Inputs.Default
            placeholder="https://"
            type="url"
            width="340px"
            label={t('site')}
            {...register('site')}
          />
          <Controller
            name="category"
            control={control}
            rules={{ required }}
            render={({ field: { value, onChange } }) => (
              <Inputs.SelectInput
                menuPortalTarget={document?.body}
                options={categories?.docs?.map(item => ({
                  value: item._id,
                  label: item.name?.find(el => el.lang === 'en')?.value || '',
                }))}
                width="340px"
                value={value}
                onChange={onChange}
                label={t('category')}
              />
            )}
          />
          <DescriptionWrap $error={!!errors.description?.message}>
            <p>{t('description')}</p>
            <textarea {...register('description', { required })}></textarea>
            {!!errors.description?.message && (
              <span>{errors.description?.message}</span>
            )}
          </DescriptionWrap>
        </Container>
      </PhotoWrap>
    </BasicInfoWrap>
  );
};
