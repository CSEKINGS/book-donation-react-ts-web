import * as Pages from "src/app/pages";
import * as Constants from "src/constants";
import * as Router from "react-router-dom";

export const Main = () => (
  <>
    <Pages.Profile.Views.UserInfo />
    <Pages.Profile.Views.Notifications />
    <Pages.Profile.Views.Sales
      path={Constants.buttonContent[1].path}
      role="mine"
    />
    <Pages.Profile.Views.Cart
      path={Constants.buttonContent[2].path}
      role="cart"
    />
    <Router.Outlet />
  </>
);
