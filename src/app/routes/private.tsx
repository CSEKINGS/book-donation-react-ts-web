import * as Router from "react-router-dom";
import * as Hooks from "src/app/hooks";
import * as React from "react";

export const Route = ({
  restrict = false,
  ...props
}: Router.RouteProps & { restrict?: boolean }) => {
  const { user } = Hooks.useSignInCheck();

  if (user?.signin && restrict) return <Router.Route {...props} />;
  else if (!user?.signin && !restrict) return <Router.Route {...props} />;
  else return <Router.Navigate to="/" />;
};
