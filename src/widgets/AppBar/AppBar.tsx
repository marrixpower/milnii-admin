import { Aside, ExitBtn, Nav, StyledLogo, StyledNavlink } from './styled';
import { useTranslation } from 'react-i18next';
import { LuUsers2 } from 'react-icons/lu';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { useAppDispatch } from 'shared';
import { useLocation, useNavigate } from 'react-router-dom';
import { authActions, logOut } from 'features/index';
import logo from '/logo.svg';
import { MdOutlineBusinessCenter } from 'react-icons/md';
import { TbCategory } from 'react-icons/tb';

export const AppBar = () => {
  const { t } = useTranslation('sidebar');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const exit = async () => {
    await logOut();
    dispatch(authActions.exit());
    navigate('/login');
  };

  return (
    <Aside>
      <StyledLogo to="/">
        <img src={logo} alt="logo" />
        <span></span>
      </StyledLogo>
      <Nav>
        <StyledNavlink
          className={location.pathname.startsWith('/users') ? 'active' : ''}
          to="/"
        >
          <LuUsers2 />
          {t('users')}
        </StyledNavlink>

        <StyledNavlink to="/business-vendors">
          <MdOutlineBusinessCenter />
          {t('businessVendors')}
        </StyledNavlink>

        <StyledNavlink to="/categories">
          <TbCategory />
          {t('categories')}
        </StyledNavlink>
      </Nav>

      <ExitBtn onClick={exit}>
        <RiLogoutBoxLine /> {t('logOut')}
      </ExitBtn>
    </Aside>
  );
};
