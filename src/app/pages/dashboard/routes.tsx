import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Pages.Dashboard.Main />} />
  </Router.Routes>
);
