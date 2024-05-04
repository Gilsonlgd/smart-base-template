import { RouterProvider } from 'react-router-dom';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App(): JSX.Element {
  return <RouterProvider router={router} />;
}

export default App;
