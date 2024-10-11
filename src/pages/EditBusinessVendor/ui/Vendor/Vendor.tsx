import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Container, PageWrapper } from 'shared/index';
import { TVendoreForm } from './types';
import { ButtonWrap } from '../Business/styled';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { ContentWrap } from 'pages/EditUser/styled';
import { BasicInfo } from './ui';
import { useGetUser } from 'features/users';
import { useGetcategories, useGetCurrentBusiness } from 'features/index';
import { useEffect } from 'react';
import { setDefaultValue, updateUserData } from './models';

const Vendor = () => {
  const methods = useForm<TVendoreForm>();
  const { t } = useTranslation('vendors');
  const navigate = useNavigate();
  const { id } = useParams();
  const { businessInfo } = useGetCurrentBusiness(id);
  const { user } = useGetUser(businessInfo?.owner?._id);
  const { categories } = useGetcategories({ limit: '80' });

  useEffect(() => {
    if (user && categories) {
      setDefaultValue(
        user,
        methods.reset,
        categories.docs?.map(item => ({
          value: item._id,
          label: item.name.find(el => el.lang === 'en')?.value || '',
        }))
      );
    }
  }, [categories, methods.reset, user]);

  const onSubmit: SubmitHandler<TVendoreForm> = async data => {
    try {
      await updateUserData(businessInfo?.owner?._id || '', data);
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
          {businessInfo?.owner && (
            <ButtonWrap>
              <Button type="submit">{t('users:update')}</Button>
            </ButtonWrap>
          )}
          <ContentWrap>
            <BasicInfo
              options={categories?.docs?.map(item => ({
                value: item._id,
                label: item.name.find(el => el.lang === 'en')?.value || '',
              }))}
            />
          </ContentWrap>
        </Container>
      </FormProvider>
    </PageWrapper>
  );
};

export default Vendor;
