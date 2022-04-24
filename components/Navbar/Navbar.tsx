import React, { Fragment, useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import fileDownload from "js-file-download";
import axios from "axios";
import Hamburger from "hamburger-react";
import NavLinks from "./NavLinks";
import MobileNavLinks from "./MobileNavLinks";

const Navbar = () => {
  const [theme, setTheme] = useState<string>("light");
  const [isOpen, setOpen] = useState<boolean>(false);
  const nextTheme = theme === "light" ? "dark" : "light";

  const handleMobileMenu = (close: boolean) => {
    setOpen(close);
  };

  console.log("tooggle", isOpen);

  const download = async () => {
    try {
      const res = await axios.get(
        "https://alonzofiles.s3.amazonaws.com/resumes/resumeEN.pdf",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          responseType: "blob",
        }
      );

      fileDownload(res.data, "resume.pdf");
    } catch (error) {
      console.log("Error--", error);
    }
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <Fragment>
      <nav
        className={`${classes.container} ${isOpen && classes.menuContainer}`}
      >
        <a
          href="/#home"
          className={`${classes.title} ${isOpen && classes.titleHide}`}
        >
          <span>L</span>ARC
        </a>

        <div className={classes.navList}>
          <div className={classes.themeIcon}>
            <div
              className={`${classes.icons} ${isOpen && classes.iconsHide}`}
              onClick={() => setTheme(nextTheme)}
            >
              {theme === "light" ? (
                <img
                  className={classes.darkLightIcon}
                  src="https://alonzofiles.s3.amazonaws.com/images/light-mode.png"
                  alt="lightmode-img"
                />
              ) : (
                <img
                  className={classes.darkLightIcon}
                  src="https://alonzofiles.s3.amazonaws.com/images/dark-mode.png"
                  alt="darkmode-img"
                />
              )}
            </div>

            <div className={classes.hambgMenu}>
              <div className={classes.hamburgerIcon}>
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  direction="right"
                  size={22}
                  duration={0.7}
                  color="var(--text-primary)"
                />
              </div>
              {isOpen && (
                <MobileNavLinks
                  onClose={handleMobileMenu}
                  download={download}
                />
              )}
            </div>
          </div>
          <NavLinks download={download} />
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
