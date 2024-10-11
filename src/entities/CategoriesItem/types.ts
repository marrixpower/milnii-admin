import { TCategory, TCategoryResponse } from 'features/categories';
import { KeyedMutator } from 'swr';

export type TProps = {
  item: TCategory;
  mutate: KeyedMutator<TCategoryResponse>;
};

export type TCategoryForm = {
  name: string;
  oldImage?: string;
  newImage?: FileList;
};

export type TModalProps = {
  item?: TCategory;
  mutate: KeyedMutator<TCategoryResponse>;
  close: () => void;
};
