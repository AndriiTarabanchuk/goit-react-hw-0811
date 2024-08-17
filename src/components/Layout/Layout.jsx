import { Outlet } from "react-router";
import css from "./Layout.module.css";

import React from "react";
import Header from "../Header/Header";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
