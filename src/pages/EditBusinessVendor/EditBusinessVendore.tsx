import { useTranslation } from 'react-i18next';
import { IoChevronBack } from 'react-icons/io5';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Container, HeadingWrap } from 'shared/index';
import { LinkStyled, LinkWrapper } from './styled';
import { Suspense } from 'react';

const EditBusinessVendore = () => {
  const { t } = useTranslation('vendors');
  const navigate = useNavigate();
  const onBackClick = () => navigate('/business-vendors');
  const { id } = useParams();

  return (
    <Container $flexDirection="column">
      <HeadingWrap>
        <h2 onClick={onBackClick}>
          <IoChevronBack />
          {t('editing')}
        </h2>
      </HeadingWrap>
      <LinkWrapper>
        <LinkStyled end to={`/business-vendors/${id}`}>
          {t('business')}
        </LinkStyled>
        <LinkStyled to={`vendor`}>{t('vendor')}</LinkStyled>
      </LinkWrapper>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default EditBusinessVendore;
