import React from "react";
import ReactDOM from "react-dom";
import * as Themes from "src/themes";
import * as Notistack from "notistack";
import * as ReactQuery from "react-query";
import * as App from "src/app";

export const Main = () => {
  const queryClient = new ReactQuery.QueryClient();
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
          <App.Main />
        </Notistack.SnackbarProvider>
      </ReactQuery.QueryClientProvider>
    </Themes.Main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
