import { lazy } from 'react';
export * from './Login/Login';
const Users = lazy(() => import('./Users/Users'));
const EditUser = lazy(() => import('./EditUser/EditUser'));
const BusinessVendors = lazy(() => import('./BusinessVendors/BusinessVendors'));
const EditBusinessVendore = lazy(
  () => import('./EditBusinessVendor/EditBusinessVendore')
);
const Business = lazy(() => import('./EditBusinessVendor/ui/Business'));
const Vendor = lazy(() => import('./EditBusinessVendor/ui/Vendor'));
const Categories = lazy(() => import('./Categories/Categories'));

export {
  Users,
  EditUser,
  BusinessVendors,
  EditBusinessVendore,
  Business,
  Vendor,
  Categories,
};
