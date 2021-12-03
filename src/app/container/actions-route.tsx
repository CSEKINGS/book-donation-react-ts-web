import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="buy" element={<Pages.Books.Dialogs.Buy />} />
    <Router.Route path="message" element={<Pages.Books.Dialogs.Message />} />
    <Router.Route path="cart" element={<Pages.Books.Dialogs.Cart />} />
    <Router.Route
      path="change"
      element={<Pages.Books.Dialogs.CreateEdit variant="edit" />}
    />
    <Router.Route path="delete" element={<Pages.Books.Dialogs.Delete />} />
    <Router.Route path="locate" element={<Pages.Books.Dialogs.Locate />} />
    <Router.Route path="remove" element={<Pages.Books.Dialogs.Remove />} />
    <Router.Route path="cancel" element={<Pages.Books.Dialogs.Cancel />} />
  </Router.Routes>
);
