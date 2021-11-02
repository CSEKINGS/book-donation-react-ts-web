import * as Router from "react-router-dom";
import * as Page from "src/app/pages";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Page.Dashboard.Main />} />
  </Router.Routes>
);
