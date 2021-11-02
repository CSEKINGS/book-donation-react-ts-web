import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Themes from "src/themes";

export const Main = () => (
  <Themes.Main>
    <Router.BrowserRouter>
      <Routes.Main />
    </Router.BrowserRouter>
  </Themes.Main>
);
