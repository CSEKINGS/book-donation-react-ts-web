import * as Mui from "@mui/material";

export const components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 7,
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          borderRadius: 30,
        },
        outlined: {
          borderRadius: 30,
        },
        root: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 30,
        },
      },
    },
  },
});
