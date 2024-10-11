import { SubmitHandler, useForm } from 'react-hook-form';
import { TCategoryForm, TModalProps } from './types';
import { ChangeEvent, useEffect, useRef } from 'react';
import { ModalWrap } from './styled';
import { Inputs, Button, Container, CustomImage, Upload } from 'shared';
import { useTranslation } from 'react-i18next';
import {
  createCategory,
  updateCategory,
  uploadCategoryPhoto,
} from 'features/categories';

const imgPath = import.meta.env.VITE_IMG_URL;

export const ModalCategory = ({ item, mutate, close }: TModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation('users');
  const {
    register,
    watch,
    reset,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TCategoryForm>();

  useEffect(() => {
    if (item) {
      reset({ name: item.name[0].value, oldImage: item.image });
    }
  }, [item, reset]);

  const onSubmit: SubmitHandler<TCategoryForm> = async data => {
    const name = [{ lang: 'en', value: data.name }];
    const formData = new FormData();

    data.newImage?.length && formData.append('image', data.newImage[0]);

    if (item) {
      await updateCategory({
        id: item._id,
        newData: { name, image: data.oldImage || '' },
      });
      if (data.newImage?.length) {
        await uploadCategoryPhoto(item._id, formData);
      }
    } else {
      const { data: categoryData } = await createCategory({ name });
      if (data.newImage?.length) {
        await uploadCategoryPhoto(categoryData._id, formData);
      }
    }
    close();
    mutate();
  };

  const newImage = watch('newImage');

  const srcImage =
    newImage && newImage.length > 0
      ? URL.createObjectURL(newImage[0])
      : watch('oldImage')
      ? `${imgPath}category/${watch('oldImage')}`
      : '';

  const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      setValue('oldImage', undefined);
      setValue('newImage', files);
    }
  };
  const onDownloadNewPhotoClick = () => {
    inputRef.current?.click();
  };
  const deleteImage = () => {
    setValue('oldImage', undefined), setValue('newImage', undefined);
  };

  register('newImage', {
    required: {
      value: !srcImage,
      message: 'this field is required',
    },
  });

  return (
    <ModalWrap onSubmit={handleSubmit(onSubmit)}>
      <label className="visually-hidden">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={onPhotoChange}
        />
      </label>
      <Container $flexDirection="column" $gap="8px" $alignItems="center">
        <Container as={'p'} $fontWeight="600">
          {t('vendors:photo')}
        </Container>
        {srcImage ? (
          <CustomImage
            onDeleteClick={deleteImage}
            withDeleteIcon
            width="350px"
            height="300px"
            src={srcImage}
          />
        ) : (
          <Upload
            error={!!errors?.newImage?.message}
            width="350px"
            height="300px"
            onClick={onDownloadNewPhotoClick}
          />
        )}
      </Container>
      <Inputs.Default
        placeholder={t('name')}
        $error={errors?.name?.message}
        width="350px"
        label={t('name')}
        {...register('name', { required: t('errors:fieldRequired') })}
      />
      <Button disabled={isSubmitting} type="submit">
        {item ? t('update') : t('create')}
      </Button>
    </ModalWrap>
  );
};
