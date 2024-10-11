import {
  Button,
  Inputs,
  setAuthTokenHeader,
  useAppDispatch,
} from 'shared/index';
import { FormWrap, Wrap } from './styled';
import { TFormTypes } from './types';

import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authActions, login } from 'features/index';

export const Login = () => {
  const { t } = useTranslation('sidebar');
  const length = 5;
  const [errorPassword, setErrorpassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<TFormTypes>({ mode: 'all' });

  const onSubmit: SubmitHandler<TFormTypes> = async data => {
    try {
      const { accessToken } = await login(data);
      dispatch(authActions.enter(accessToken));
      setAuthTokenHeader(accessToken);
      navigate('/');
    } catch (error) {
      toast.error(t('toasts:notAdminWithThisData'));
    }
  };

  return (
    <Wrap>
      <img src={'/logo.svg'} alt="logo" />
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        <h3>{t('entrance')}</h3>
        <Inputs.Default
          {...register('login', {
            required: { value: true, message: t('errors:fieldRequired') },
          })}
          label={t('login')}
          placeholder={t('enterYourEmail')}
          $error={errors.login?.message}
        />
        <Inputs.Default
          {...register('password', {
            required: {
              value: true,
              message: errorPassword
                ? errorPassword
                : t('errors:fieldRequired'),
            },
            minLength: {
              value: length,
              message: t('errors:minimumLength', { number: length }),
            },
          })}
          onFocus={() => setErrorpassword('')}
          type="password"
          label={t('password')}
          placeholder={t('password')}
          $error={errors.password?.message || errorPassword}
        />

        <Button type="submit" width="100%" disabled={!isValid}>
          {t('enter')}
        </Button>
      </FormWrap>
    </Wrap>
  );
};
