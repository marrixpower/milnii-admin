import { ChangeEvent, useRef } from 'react';
import { UseFormSetValue, UseFormTrigger, UseFormWatch } from 'react-hook-form';
import { TBusinessForm } from '../../types';

export const usePhotoLogic = (
  watch: UseFormWatch<TBusinessForm>,
  setValue: UseFormSetValue<TBusinessForm>,
  trigger: UseFormTrigger<TBusinessForm>
) => {
  const newImages = watch('newImages') || [];
  const newPhotoArray = Array.from(newImages);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDownloadNewPhotoClick = () => {
    inputRef.current?.click();
  };
  const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files) {
      const newPhotosArray = Array.from(files);
      const updatedPhotos = [...(newPhotoArray || []), ...newPhotosArray];
      setValue('newImages', updatedPhotos);
      trigger('newImages');
    }
  };
  const onDeleteOldFile = (name: string) => {
    setValue(
      'oldImages',
      watch('oldImages')?.filter(item => item !== name)
    );
  };

  const onDeleteNewPhoto = (index: number) => {
    setValue(
      'newImages',
      newPhotoArray?.filter((_, i) => i !== index)
    );
  };
  return {
    onDownloadNewPhotoClick,
    inputRef,
    onPhotoChange,
    onDeleteOldFile,
    onDeleteNewPhoto,
    newPhotoArray,
  };
};
