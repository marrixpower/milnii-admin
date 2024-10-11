import { useGetCurrentBusiness } from 'features/businessVendors';
import { ContentWrap } from 'pages/EditUser/styled';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Container, PageWrapper } from 'shared/index';
import { BasicInfo, Organization } from './ui';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { TBusinessForm } from './types';
import { ButtonWrap } from './styled';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { setDefaultValue, updateBusinessData } from './models';
import toast from 'react-hot-toast';

const Business = () => {
  const { t } = useTranslation('vendors');
  const { id } = useParams();
  const { businessInfo } = useGetCurrentBusiness(id);
  const methods = useForm<TBusinessForm>({ mode: 'all' });
  const navigate = useNavigate();

  useEffect(() => {
    if (businessInfo) {
      setDefaultValue(businessInfo, methods.reset);
    }
  }, [businessInfo, methods.reset]);

  const onSubmit: SubmitHandler<TBusinessForm> = async data => {
    try {
      await updateBusinessData(id || '', data);
      toast.success(t('toasts:updateSuccess'));
      navigate('/business-vendors');
    } catch (error) {
      toast.success(t('toasts:errorUpdatingData'));
    }
  };

  return (
    <PageWrapper className="acute__angle">
      <FormProvider {...methods}>
        <Container
          $flexDirection="column"
          as="form"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <ButtonWrap>
            <Button type="submit">{t('users:update')}</Button>
          </ButtonWrap>
          <ContentWrap>
            <BasicInfo />
            <Organization />
          </ContentWrap>
        </Container>
      </FormProvider>
    </PageWrapper>
  );
};
export default Business;
