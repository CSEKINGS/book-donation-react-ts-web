import * as Mui from "@mui/material";
import * as Themes from "src/themes";
import React from "react";

export const Main = ({ children }: Children.Props) => {
  let theme = Mui.createTheme({ ...Themes.Global.Main() });
  theme = Mui.createTheme(theme, {
    shape: { borderRadius: 8 },
  });
  return (
    <Mui.ThemeProvider theme={theme}>
      <Themes.CsssBaseline.Main />
      {children}
    </Mui.ThemeProvider>
  );
};

export declare namespace Children {
  export interface Props {
    children?: React.ReactNode;
  }
}
