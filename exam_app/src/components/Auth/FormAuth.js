import { useSearchParams } from "react-router-dom";
import classes from "./FormAuth.module.css";

const FormAuth = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");

  return (
    <div className={classes["auth-form-box"]}>
      <p className={classes["form-title"]}>
        {action === "signUp" ? "Sign Up" : "Sign In"}
      </p>
      <form>
        <div className={classes["input-box"]}>
          <label for="email">Email</label>
          <input id="email" name="email"></input>
        </div>
        <div className={classes["input-box"]}>
          <label for="password">Password</label>
          <input id="password" name="password"></input>
        </div>
        {action === "signUp" && (
          <div className={classes["input-box"]}>
            <label for="RePassword">Repeat Password</label>
            <input id="rePassword" name="rePassword"></input>
          </div>
        )}
        {action === "signUp" && (
          <div className={classes["input-box"]}>
            <label for="phone">Phone Number</label>
            <input id="phone" name="phone"></input>
          </div>
        )}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default FormAuth;
