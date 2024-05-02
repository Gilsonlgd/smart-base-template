import { createBrowserRouter } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';

import Error from './views/Error';

const router = createBrowserRouter([
  {
    children: [...publicRoutes],
    errorElement: <Error />,
  },
]);

export default router;
