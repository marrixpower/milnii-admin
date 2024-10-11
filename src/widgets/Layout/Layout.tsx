import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { LayoutWrap, MainStyled } from './styled';
import { Container } from 'shared';
import { AppBar, Header } from '..';

export const Layout = () => {
  return (
    <LayoutWrap>
      <Container $alignItems="flex-start" $position="relative">
        <section>
          <AppBar />
        </section>
        <Header />
        <MainStyled>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MainStyled>
      </Container>
    </LayoutWrap>
  );
};
