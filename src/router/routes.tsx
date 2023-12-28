import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import Header from '@/components/header/Header';
import Navigation from '@/components/navigation/Navigation';
import './routes.scss';

function lazy(
  Component: React.LazyExoticComponent<React.ComponentType<any>>
): React.ReactElement {
  return (
    <Suspense fallback={<></>}>
      <Component />
    </Suspense>
  );
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: lazy(React.lazy(() => import('../views/home/Home')))
      }
    ]
  },
  {
    path: '*',
    element: lazy(React.lazy(() => import('../views/not-found/NotFound')))
  }
];

function Layout(): React.ReactElement {
  return (
    <div className="layout">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="layout-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default routes;
