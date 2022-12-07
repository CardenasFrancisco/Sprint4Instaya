import { Fragment } from "react";

import logoWhite from "../../assets/logo/svg/InstayaLogoWhite.svg";
import classes from "./Header.module.css";
import HeaderLoginButton from "./HeaderLoginButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        {/* <img src={logoWhite} alt="InstaYa white colored logo" /> */}
        <h1>instaYa</h1>
        <HeaderLoginButton />
      </header>
      {/* <div className={classes["main-image"]}></div> */}
    </Fragment>
  );
};

export default Header;
