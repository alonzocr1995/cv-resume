import React, { Dispatch, SetStateAction } from "react";
import classes from "./MobileNavLinks.module.css";
interface NavProps {
  download: () => Promise<void>;
  onClose: (close: boolean) => void;
}

const MobileNavLinks = ({ download, onClose }: NavProps) => {
  return (
    <div className={classes.container}>
      <a onClick={() => onClose(false)} href="/#home">
        HOME
      </a>
      <a onClick={() => onClose(false)} href="/#aboutme">
        ABOUT ME
      </a>
      <a onClick={() => onClose(false)} href="/#portfolio">
        PORTFOLIO
      </a>
      <a onClick={() => onClose(false)} href="/#contactme">
        CONTACT
      </a>
      <button onClick={download}>CV</button>
    </div>
  );
};

export default MobileNavLinks;
