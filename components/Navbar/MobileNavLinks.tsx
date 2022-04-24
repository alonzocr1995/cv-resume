import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
import classes from "./MobileNavLinks.module.css";
interface NavProps {
  download: () => Promise<void>;
  onClose: (close: boolean) => void;
}

const MobileNavLinks = ({ download, onClose }: NavProps) => {
  return (
    <div className={classes.container}>
      <Link href="/#home">
        <a onClick={() => onClose(false)}>HOME</a>
      </Link>
      <Link href="/#aboutme">
        <a onClick={() => onClose(false)}>ABOUT ME</a>
      </Link>
      <Link href="/#portfolio">
        <a onClick={() => onClose(false)}>PORTFOLIO</a>
      </Link>
      <Link href="/#contactme">
        <a onClick={() => onClose(false)}>CONTACT</a>
      </Link>
      <button onClick={download}>CV</button>
    </div>
  );
};

export default MobileNavLinks;
