import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'shared';

type TProps = {
  component: ReactNode;
  redirectTo?: string;
};
export const PrivateRoute = ({
  component: Component,
  redirectTo: addres = '/login',
}: TProps) => {
  const location = useLocation();
  const { isLoggedIn } = useAppSelector(state => state.authState);
  return !isLoggedIn ? (
    <Navigate to={addres} state={{ from: location }} />
  ) : (
    Component
  );
};
