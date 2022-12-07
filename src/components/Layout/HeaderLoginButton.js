import classes from "./HeaderLoginButton.module.css";
const HeaderLoginButton = (props) => {
  return (
    <button className={classes.button}>
      {/* <span className={classes.icon}></span> */}
      <span>Login</span>
    </button>
  );
};

export default HeaderLoginButton;
