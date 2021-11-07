import * as Mui from "@mui/material";

export const components = (): Pick<Mui.ThemeOptions, "components"> => {
  const borderRadius = 8;
  const boxShadow = "0px 0px 20px 10px #e9eff6";
  return {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#ffffff",
            boxShadow: "none",
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          square: {
            borderRadius,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            minHeight: 150,
            transform: "scale(0.99)",
            "&:hover": {
              transform: "scale(1)",
            },
          },
        },
      },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            height: "inherit",
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            height: "inherit",
            p: 1,
          },
        },
      },
      MuiCardMedia: {
        styleOverrides: {
          root: {
            heigth: "inherit",
            borderRadius,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          contained: {
            boxShadow: "-10px 10px 30px 10px #e9eff6",
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
            "& fieldset": {
              borderColor: "#e9eff6",
              zIndex: -1,
              backgroundColor: "#e9eff6",
            },
            "&:hover fieldset": {
              borderColor: "#e9eff6 !important",
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            border: "none",
          },
        },
      },
      MuiStack: {
        defaultProps: {
          borderRadius:1,
        },
      },
    },
  };
};
