import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Layouts from "src/app/layouts";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Layouts.Account.Main />}>
      <Router.Route path="signin/*" element={<Pages.Account.SignIn.Main />}>
        <Router.Route
          path="success"
          element={<Pages.Account.SignIn.Success />}
        />
      </Router.Route>
      <Router.Route path="signup/*" element={<Pages.Account.SignUp.Main />}>
        <Router.Route
          path="success"
          element={<Pages.Account.SignUp.Success />}
        />
      </Router.Route>
      <Router.Route path="forget/*" element={<Pages.Account.Forget.Main />}>
        <Router.Route
          path="success"
          element={<Pages.Account.Forget.Success />}
        />
      </Router.Route>
      <Router.Route path="reset/*" element={<Pages.Account.Reset.Main />}>
        <Router.Route
          path="success"
          element={<Pages.Account.Reset.Success />}
        />
      </Router.Route>
    </Router.Route>
  </Router.Routes>
);
