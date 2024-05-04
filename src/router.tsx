import { createBrowserRouter } from 'react-router-dom';
import publicRoutes from './routes/publicRoutes';

import FallbackView from './views/Fallback';

const router = createBrowserRouter([
  {
    errorElement: <FallbackView />,
    children: [...publicRoutes],
  },
]);

export default router;
