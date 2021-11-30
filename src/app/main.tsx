import * as Router from "react-router-dom";
import * as Routes from "src/app/routes";
import * as Themes from "src/themes";
import * as Pages from "src/app/pages";
import * as React from "react";
import * as Notistack from "notistack";
import * as ReactQuery from "react-query";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export const Main = () => {
  const [search, setSearch] = React.useState("");
  const [location, setLocation] = React.useState<number[]>();
  const queryClient = new ReactQuery.QueryClient();

  React.useEffect(
    () =>
      navigator.geolocation.getCurrentPosition((position) =>
        setLocation([position.coords.latitude, position.coords.longitude])
      ),
    []
  );

  return (
    <Themes.Main>
      <ReactQuery.QueryClientProvider client={queryClient}>
        <Notistack.SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          autoHideDuration={2000}
        >
          <Pages.Search.Hooks.Search.Provider
            value={{
              search,
              setSearch,
              location
            }}
          >
            <Router.BrowserRouter>
              <Routes.Main />
            </Router.BrowserRouter>
          </Pages.Search.Hooks.Search.Provider>
        </Notistack.SnackbarProvider>
      </ReactQuery.QueryClientProvider>
    </Themes.Main>
  );
};
