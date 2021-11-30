import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="/*" element={<Pages.Profile.Main />}>
      <Router.Route
        path="user-edit"
        element={<Pages.Profile.Dialogs.UserEdit />}
      />
      <Router.Route path="delete" element={<Pages.Profile.Dialogs.Delete />} />
      <Router.Route path="chat" element={<Pages.Profile.Dialogs.Chat />} />
    </Router.Route>
  </Router.Routes>
);
