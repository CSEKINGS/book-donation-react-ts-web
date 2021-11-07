import * as Mui from "@mui/material";

export const palette = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    primary: {
      main: "#4460f1",
      light: "#4460f1D8",
    },
    secondary: {
      main: "#e9eff6",
      light: "#e9eff6D8",
    },
  },
});
