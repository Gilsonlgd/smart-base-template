import { createBrowserRouter } from 'react-router-dom';

import PublicLayout from '@layout/public/PublicLayout';
import publicRoutes from './routes/publicRoutes';

import FallbackView from './views/Fallback';

const router = createBrowserRouter([
  {
    errorElement: <FallbackView />,
    children: [
      {
        path: '/',
        element: <PublicLayout />,
        children: publicRoutes,
      },
    ],
  },
]);

export default router;
