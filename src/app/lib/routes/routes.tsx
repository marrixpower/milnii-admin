import {
  Login,
  Users,
  EditUser,
  BusinessVendors,
  EditBusinessVendore,
  Vendor,
  Business,
  Categories,
} from 'pages/index';
import { PrivateRoute } from 'shared/index';
import { Layout } from 'widgets/index';
import { Routes } from './types';

export const routes: Routes = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <PrivateRoute component={<Layout />} />,
    children: [
      {
        element: <PrivateRoute component={<Users />} />,
        index: true,
      },
      {
        element: <PrivateRoute component={<EditUser />} />,
        path: '/users/:id',
      },
      {
        element: <PrivateRoute component={<BusinessVendors />} />,
        path: '/business-vendors',
      },
      {
        element: <PrivateRoute component={<EditBusinessVendore />} />,
        path: '/business-vendors/:id',
        children: [
          { element: <PrivateRoute component={<Business />} />, index: true },
          { element: <PrivateRoute component={<Vendor />} />, path: 'vendor' },
        ],
      },
      {
        element: <PrivateRoute component={<Categories />} />,
        path: '/categories',
      },
    ],
  },
];
