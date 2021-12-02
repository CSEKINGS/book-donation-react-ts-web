import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Hooks from "src/app/hooks";
import * as React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export const Main = () => {
  const [search, setSearch] = React.useState("");
  const [location, setLocation] = React.useState<number[]>();
  const { user } = Hooks.useSignInCheck();
  React.useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((position) =>
        setLocation([position.coords.latitude, position.coords.longitude])
      ),
    []
  );

  return (
    <Hooks.Search.Provider
      value={{
        search,
        setSearch,
        location,
        user,
      }}
    >
      <Router.BrowserRouter>
        <Routes.Main />
      </Router.BrowserRouter>
    </Hooks.Search.Provider>
  );
};
