import Link from "next/link";
import React from "react";
import classes from "./NavLinks.module.css";

interface NavProps {
  download: () => Promise<void>;
}

const NavLinks = ({ download }: NavProps) => {
  return (
    <div className={classes.navLinkContainer}>
      <Link href="/#home">
        <a>HOME</a>
      </Link>
      <Link href="/#aboutme">
        <a>ABOUT ME</a>
      </Link>
      <Link href="/#portfolio">
        <a>PORTFOLIO</a>
      </Link>
      <Link href="/#contactme">
        <a>CONTACT</a>
      </Link>
      <button onClick={download}>CV</button>
    </div>
  );
};

export default NavLinks;
