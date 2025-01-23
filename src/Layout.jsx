import React from "react";
import Navbar from "./components/Common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Common/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
