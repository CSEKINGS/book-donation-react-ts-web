import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Page from "src/app/pages";

export const Main = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Layouts.SampleLayout.Main />}>
      <Router.Route path="/*" element={<Page.LandingSite.Routes />} />
      <Router.Route path="dashboard/*" element={<Page.Dashboard.Routes />} />
      <Router.Route path="account/*" element={<Page.Account.Routes />} />
    </Router.Route>
  </Router.Routes>
);
