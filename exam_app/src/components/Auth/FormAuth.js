import classes from "./FormAuth.module.css";

const FormAuth = () => {
  return (
    <div className={classes["auth-form-box"]}>
      <h2>Sign Up</h2>
      <form>
        <input></input>
        <input></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default FormAuth;
