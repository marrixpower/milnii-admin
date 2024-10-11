import { Container, Button } from 'shared';
import { DescriptionWrap, HeadingWrap, ModalWrap } from './styled';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import { RiDeleteBin6Line } from 'react-icons/ri';

type TProps = {
  close: () => void;
  onDeleteClick?: () => void;
  headingTitle?: string;
  descriptionText?: string;
};

export const DeleteModal = ({
  close,
  headingTitle,
  onDeleteClick,
  descriptionText,
}: TProps) => {
  const { t } = useTranslation('users');
  const title = headingTitle || t('removal');
  const description = descriptionText || t('areYouSureYouWantDelete');
  const theme = useTheme();
  return (
    <ModalWrap>
      <HeadingWrap>
        <p>{title}</p>
        <IoClose onClick={close} />
      </HeadingWrap>
      <DescriptionWrap>{description}</DescriptionWrap>
      <Container $justifyContent="flex-end" $gap="20px">
        <Button type="button" onClick={close}>
          {t('cancel')}
        </Button>
        <Button
          mouseHoverBg="transparent"
          $borderColor={theme.colors.errorRed}
          type="button"
          color={theme.colors.errorRed}
          onClick={onDeleteClick}
          fill="transparent"
        >
          <RiDeleteBin6Line /> {t('delete')}
        </Button>
      </Container>
    </ModalWrap>
  );
};
