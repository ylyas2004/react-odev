import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Template = () => {
  return (
    <>
      <NavBar />
      <div className="container1">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Template;
