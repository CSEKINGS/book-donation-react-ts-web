import * as Mui from "@mui/material";

export const palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    primary: {
      main: "#000000",
      light: "#00000050",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff50",
    },
  },
});
