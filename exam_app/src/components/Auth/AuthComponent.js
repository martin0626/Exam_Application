import { Fragment } from "react";
import classes from "./AuthComponent.module.css";
import FormAuth from "./FormAuth";
import { Link, useSearchParams } from "react-router-dom";

const AuthComponent = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");

  return (
    <div className={classes.auth}>
      <div className={classes["choose-btns"]}>
        <Link
          className={action === "signIn" && classes["active-btn"]}
          to="/auth?action=signIn"
        >
          Sign In
        </Link>
        <Link
          className={action === "signUp" && classes["active-btn"]}
          to="/auth?action=signUp"
        >
          Sign Up
        </Link>
      </div>
      <FormAuth />
    </div>
  );
};

export default AuthComponent;
