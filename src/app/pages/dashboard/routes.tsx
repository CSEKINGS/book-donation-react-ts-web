import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Layouts from "src/app/layouts";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Layouts.MainLayout.Main />}>
      <Router.Route path="/" element={<Pages.Dashboard.Main />} />
    </Router.Route>
  </Router.Routes>
);
