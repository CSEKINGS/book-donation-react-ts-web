import * as Mui from "@mui/material";

export const components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 7,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          minHeight: 150,
          maxWidth: 400,
          borderRadius: 15,
          transform: "scale(0.99)",
          "&:hover": {
            transform: "scale(1)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          p: 1,
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: 15,
        },
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
