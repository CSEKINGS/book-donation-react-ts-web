import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const Routes = () => (
  <Router.Routes>
    <Router.Route path="/" element={<Pages.Dashboard.Main />} />
    <Router.Route path=":bookId" element={<Pages.Books.Views.BookDetails />} />
  </Router.Routes>
);
