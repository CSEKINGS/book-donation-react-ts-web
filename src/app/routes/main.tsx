import * as Router from "react-router-dom";
import * as Layouts from "src/app/layouts";
import * as Pages from "src/app/pages";
import * as Containers from "src/app/container";
import * as Private from "./private";

export const Main = () => (
  <Router.Routes>
    <Router.Route path="/*">
      <Private.Route path="/*" element={<Layouts.Account.Main />}>
        <Router.Route path="account/*" element={<Pages.Account.Routes />} />
      </Private.Route>
      <Router.Route path="/*" element={<Layouts.MainLayout.Main />}>
        <Router.Route path="/*" element={<Pages.LandingSite.Routes />} />
        <Private.Route
          restrict
          path="dashboard/*"
          element={<Pages.Dashboard.Routes />}
        />
        <Private.Route
          restrict
          path="search/*"
          element={<Pages.Search.Routes />}
        />
        <Private.Route
          restrict
          path="profile/*"
          element={<Pages.Profile.Routes />}
        />
        <Private.Route
          restrict
          path="mine/*"
          element={<Pages.Books.Views.Sales />}
        >
          <Router.Route
            path="create"
            element={<Pages.Books.Dialogs.CreateEdit variant="create" />}
          />
        </Private.Route>
        <Private.Route
          restrict
          path="cart/*"
          element={<Pages.Books.Views.Cart />}
        />
        <Private.Route
          restrict
          path="books/:bookId/*"
          element={<Pages.Books.Views.BookDetails />}
        >
          <Router.Route path="/*" element={<Containers.Routes />} />
        </Private.Route>
      </Router.Route>
    </Router.Route>
    <Router.Route path="*" element={<Pages.PageNotFound.Main />} />
  </Router.Routes>
);
