import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import routes from './routes';

function AppRouter(): React.ReactElement {
  const router = createHashRouter(routes, {
    // basename: import.meta.env.BASE_URL
  });

  return <RouterProvider router={router} />;
}

export default AppRouter;
