import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Pages from "src/app/pages";

export const Main = () => (
  <Router.Routes>
    <Router.Route path="/*">
      <Router.Route path="/*" element={<Layouts.Account.Main />}>
        <Router.Route path="account/*" element={<Pages.Account.Routes />} />
      </Router.Route>
      <Router.Route path="/*" element={<Layouts.MainLayout.Main />}>
        <Router.Route path="/*" element={<Pages.LandingSite.Routes />} />
        <Router.Route path="dashboard/*" element={<Pages.Dashboard.Routes />} />
        <Router.Route path="profile/*" element={<Pages.Profile.Routes />} />
      </Router.Route>
    </Router.Route>
    {/* <Router.Route path="/*" element={<Pages.PageNotFound.Main />} /> */}
  </Router.Routes>
);
