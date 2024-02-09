import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import DetailAnnoncePage from 'src/pages/detailannonce';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const DetailPage = lazy(() => import('src/pages/detail'));
export const HistoPage = lazy(() => import('src/pages/historique'));
export const LoginPage = lazy(() => import('src/pages/login'));

export default function Router() {
  
  const idUser = null;

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <DetailAnnoncePage />, index: true },
        { 
          path: 'user',
          element: idUser !== null ? <UserPage /> : null
        },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <DetailAnnoncePage /> },
        { path: 'historique', element: <HistoPage /> }, // Cette route ne sera rendue que si isConnected est true
      ].filter(route => route !== null), // Filtrer les routes nulles
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: 'detail',
      element: <DetailPage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: '*', // Cette route catch-all est placée à la fin
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
