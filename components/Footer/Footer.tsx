import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <a href="/#home" className={classes.title}>
        <span>L</span>ARC
      </a>
      <div className={classes.iconContainer}>
        <a href="https://github.com/alonzocr1995" target="_blank">
          <img
            width="35px"
            height="35px"
            src="https://alonzofiles.s3.amazonaws.com/images/iconmonstr-github-1-240.png"
            alt="github-icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/luis-alonzo-ramirez-7175981b4/"
          target="_blank"
        >
          <img
            width="35px"
            height="35px"
            src="https://alonzofiles.s3.amazonaws.com/images/iconmonstr-linkedin-3-240.png"
            alt="linkedin-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;