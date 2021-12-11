import * as Themes from "src/themes";
import * as Notistack from "notistack";
import * as ReactQuery from "react-query";
import * as Router from "react-router-dom";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new ReactQuery.QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
  });

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
          <Router.BrowserRouter>{children}</Router.BrowserRouter>
        </Notistack.SnackbarProvider>
      </ReactQuery.QueryClientProvider>
    </Themes.Main>
  );
};
