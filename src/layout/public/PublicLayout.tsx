import './PublicLayout.css';
import { Outlet } from 'react-router-dom';

/*
 * import Navbar from "./components/Navbar/Navbar";
 * import Footer from "./components/Footer/Footer";
 */

function PublicLayout(): JSX.Element {
  return (
    <div style={{ height: '100%' }}>
      {/* <NavBar /> */}
      <div className="page-content">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default PublicLayout;
