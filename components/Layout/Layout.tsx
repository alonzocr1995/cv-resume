import React, { FC, Fragment } from "react";
import Background from "../Background";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <main className={classes.main}>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
