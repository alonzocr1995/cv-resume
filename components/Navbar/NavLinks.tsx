import React, { Fragment } from "react";
import classes from "./NavLinks.module.css";

interface NavProps {
  download: () => Promise<void>;
}

const NavLinks = ({ download }: NavProps) => {
  return (
    <div className={classes.navLinkContainer}>
      <a href="/#home">HOME</a>
      <a href="/#aboutme">ABOUT ME</a>
      <a href="/#portfolio">PORTFOLIO</a>
      <a href="/#contactme">CONTACT</a>
      <button onClick={download}>CV</button>
    </div>
  );
};

export default NavLinks;
