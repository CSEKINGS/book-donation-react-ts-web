import * as Mui from "@mui/material";

export const palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    primary: {
      main: "#150BD4",
      light: "#150BD490",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff50",
    },
  },
});
