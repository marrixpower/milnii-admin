import { deleteUser, useGetUser } from 'features/users';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IoChevronBack } from 'react-icons/io5';
import { useNavigate, useParams } from 'react-router-dom';
import { Container } from 'shared/Container';
import {
  Button,
  HeadingWrap,
  Modal,
  PageWrapper,
  useToggle,
} from 'shared/index';
import { TEditUserForm } from './types';
import { setDefaultValue, updateUserData } from './models';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { ContentWrap } from './styled';
import { BasicInfo, Organization } from './ui';
import { DeleteModal } from 'widgets/index';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onBackClick = () => navigate('/');
  const { user } = useGetUser(id);
  const { t } = useTranslation('users');
  const methods = useForm<TEditUserForm>({ mode: 'all' });
  const { isOpen, toggle } = useToggle();
  const theme = useTheme();

  useEffect(() => {
    if (user) {
      setDefaultValue(user, methods.reset);
    }
  }, [methods.reset, user]);

  const onSubmit: SubmitHandler<TEditUserForm> = async data => {
    try {
      await updateUserData(data, id || '');
      toast.success(t('toasts:updateSuccess'));
      onBackClick();
    } catch (error) {
      toast.error(t('toasts:errorUpdatingData'));
    }
  };

  const deleteUserClick = async () => {
    try {
      await deleteUser(id || '');
      onBackClick();
      toast.success(t('toasts:removalWasSuccessful'));
    } catch (error) {
      toast.error(t('toasts:errorDuringDeletion'));
    }
  };

  return (
    <FormProvider {...methods}>
      <Modal isOpen={isOpen} closeModal={toggle}>
        <DeleteModal close={toggle} onDeleteClick={deleteUserClick} />
      </Modal>
      <Container
        $flexDirection="column"
        as="form"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <HeadingWrap>
          <h2 onClick={onBackClick}>
            <IoChevronBack />
            {t('edit_user')}
          </h2>
          <Container $margin="0" width="auto" $gap="20px">
            <Button
              mouseHoverBg="transparent"
              $borderColor={theme.colors.errorRed}
              fill="transparent"
              color={theme.colors.errorRed}
              onClick={toggle}
              type="button"
            >
              <RiDeleteBinLine /> {t('delete')}
            </Button>
            <Button type="submit">{t('update')}</Button>
          </Container>
        </HeadingWrap>
        <PageWrapper>
          <ContentWrap>
            <BasicInfo />
            <Organization />
          </ContentWrap>
        </PageWrapper>
      </Container>
    </FormProvider>
  );
};

export default EditUser;
