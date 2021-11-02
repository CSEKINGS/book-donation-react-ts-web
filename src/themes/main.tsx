import * as Mui from "@mui/material";
import * as Themes from "src/themes";
import React from "react";

export const Main = ({ children }: Main.Props) => {
  let theme = Mui.createTheme({ ...Themes.Global.Main() });
  return (
    <Mui.ThemeProvider theme={theme}>
      <Themes.CsssBaseline.Main />
      {children}
    </Mui.ThemeProvider>
  );
};

export declare namespace Main {
  export interface Props {
    children?: React.ReactNode;
  }
}
