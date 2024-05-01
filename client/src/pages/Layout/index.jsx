import { Outlet } from "react-router-dom";
import { Navigation } from "../../components/Navbar";
import Footer from "../../components/Footer";

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
