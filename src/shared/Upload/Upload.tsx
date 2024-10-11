import { UploadWrap } from './styled';
import { RiUploadFill } from 'react-icons/ri';
import { UploadProps } from './types';
import { useTranslation } from 'react-i18next';

export const Upload = ({
  isRound = false,
  onClick,
  width = '219px',
  height = '219px',
  error = false,
}: UploadProps) => {
  const { t } = useTranslation('users');
  return (
    <UploadWrap
      $error={error}
      onClick={onClick}
      $round={isRound}
      height={height}
      width={width}
    >
      <RiUploadFill />
      <p>{t('uploadFile')}</p>
    </UploadWrap>
  );
};
