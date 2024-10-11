import { useTranslation } from 'react-i18next';
import { InputSearch } from './types';
import { CiSearch } from 'react-icons/ci';
import { Label } from './styled';

export const SearchInput = ({
  value,
  onChange,
  width,
  height,
  visibleBorder,
}: InputSearch) => {
  const { t } = useTranslation('sidebar');

  return (
    <Label width={width} height={height} $borderVisible={visibleBorder}>
      <input placeholder={t('search')} value={value} onChange={onChange} />
      <CiSearch />
    </Label>
  );
};
