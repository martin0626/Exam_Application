import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const NavigationElement = () => {
  return (
    <nav className={classes.navigation}>
      <div className={`${classes["nav-element"]} ${classes.home}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
          end
        >
          Home
        </NavLink>
      </div>
      <div className={classes["nav-element"]}>
        <NavLink
          to="/exams"
          className={({ isActive }) => (isActive ? classes.active : "")}
          end
        >
          Exams
        </NavLink>
      </div>
      <div className={classes["nav-element"]}>
        <NavLink
          to="/auth"
          className={({ isActive }) => (isActive ? classes.active : "")}
          end
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default NavigationElement;
