import PublicLayout from '@layout/public/PublicLayout';

import Home from '@views/public/Home/Home';

const publicRoutes = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
];

export default publicRoutes;
