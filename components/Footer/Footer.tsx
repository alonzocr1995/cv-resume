import Link from "next/link";
import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <Link href="/#home">
        <a className={classes.title}>
          <span>L</span>ARC
        </a>
      </Link>
      <div className={classes.iconContainer}>
        <Link href="https://github.com/alonzocr1995">
          <a target="_blank">
            <img
              width="35px"
              height="35px"
              src="https://alonzofiles.s3.amazonaws.com/images/iconmonstr-github-1-240.png"
              alt="github-icon"
            />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/luis-alonzo-ramirez-7175981b4/">
          <a target="_blank">
            <img
              width="35px"
              height="35px"
              src="https://alonzofiles.s3.amazonaws.com/images/iconmonstr-linkedin-3-240.png"
              alt="linkedin-icon"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
