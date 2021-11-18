import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import DashboardApp from './pages/Dashboard/DashboardApp';
import Products from './pages/Product/Products';
import User from './pages/User/User';
import UserForm from './pages/User/UserForm';
import Sales from './pages/Sales/Sales';
import SalesForm from './pages/Sales/SalesForm';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/app',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/app/dashboard" replace /> },
        { path: 'dashboard', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'user/:userId/details', element: <UserForm /> },
        { path: 'sales', element: <Sales /> },
        { path: 'sales/:orderId/details', element: <SalesForm /> },
        { path: 'sales/new-order', element: <SalesForm /> },
        { path: 'products', element: <Products /> },
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/app" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
