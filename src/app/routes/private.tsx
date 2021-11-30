import * as Router from "react-router-dom";
import * as Hooks from "src/app/hooks";

export const Route = ({
  restrict = false,
  ...props
}: Router.RouteProps & { restrict?: boolean }) => {
  const {
    user: { signin },
  } = Hooks.useSignInCheck();
  if (signin && restrict) return <Router.Route {...props} />;
  else if (!signin && !restrict) return <Router.Route {...props} />;
  else return <Router.Navigate to="/" />;
};
