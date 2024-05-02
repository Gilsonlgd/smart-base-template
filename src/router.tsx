import { createBrowserRouter } from 'react-router-dom';

import Home from '@/views/public/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default router;
