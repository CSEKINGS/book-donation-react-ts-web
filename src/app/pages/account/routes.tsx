import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="signin/*" element={<Pages.Account.SignIn.Main />} />
    <Router.Route path="signup/*" element={<Pages.Account.SignUp.Main />} />
    <Router.Route path="forget/*" element={<Pages.Account.Forget.Main />} />
    <Router.Route path="reset/*" element={<Pages.Account.Reset.Main />} />
  </Router.Routes>
);
