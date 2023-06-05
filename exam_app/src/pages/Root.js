import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavigationElement from "../components/Navigation/Navigation";

const RootPage = () => {
  return (
    <Fragment>
      <NavigationElement />
      <Outlet />
    </Fragment>
  );
};

export default RootPage;
