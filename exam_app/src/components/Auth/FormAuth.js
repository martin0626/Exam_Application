import { Form, useSearchParams } from "react-router-dom";
import classes from "./FormAuth.module.css";
import { useState } from "react";

const FormAuth = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const [rePassword, setRePassword] = useState("");
  const [password, setPassword] = useState("");

  const onRePasswordHander = (e) => {
    setRePassword(e.target.value);
  };

  return (
    <div className={classes["auth-form-box"]}>
      <p className={classes["form-title"]}>
        {action === "signUp" ? "Sign Up" : "Sign In"}
      </p>
      <Form method="post">
        <div className={classes["input-box"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email"></input>
        </div>
        <div className={classes["input-box"]}>
          <label htmlFor="password">Password</label>
          <input
            onBlur={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
          ></input>
        </div>
        {action === "signUp" && (
          <div className={classes["input-box"]}>
            {rePassword !== password && (
              <p className={classes["err-msg"]}>Password not match</p>
            )}
            <label htmlFor="RePassword">Repeat Password</label>
            <input
              onChange={onRePasswordHander}
              type="password"
              id="rePassword"
              name="rePassword"
            ></input>
          </div>
        )}
        {action === "signUp" && (
          <div className={classes["input-box"]}>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone"></input>
          </div>
        )}
        {action === "signUp" && (
          <div className={classes["input-radio"]}>
            <p>Choose your role:</p>
            <div className={classes["radio-choice"]}>
              <div>
                <input
                  type="radio"
                  id="student"
                  value="student"
                  name="role"
                ></input>
                <label htmlFor="student">Student</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="teacher"
                  value="teacher"
                  name="role"
                ></input>
                <label htmlFor="teacher">Teacher</label>
              </div>
            </div>
          </div>
        )}
        {(action === "signUp") &
        (password !== rePassword || rePassword === "") ? (
          <button
            type="submit"
            disabled={true}
            className={classes["btn-disabled"]}
          >
            Sign Up
          </button>
        ) : (
          <button type="submit">Sign Up</button>
        )}
      </Form>
    </div>
  );
};

export default FormAuth;
