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
            borderRadius,
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
            overflow: "visible",
            minHeight: 150,
            transform: "scale(0.99)",
            "&:hover": {
              transform: "scale(1)",
            },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: {
            borderRadius,
          },
        },
      },
      MuiCardActionArea: {
        styleOverrides: {
          root: {
            height: "inherit",
            borderRadius,
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            height: "inherit",
            p: 0.5,
          },
        },
      },
      MuiCardMedia: {
        styleOverrides: {
          root: {
            heigth: "inherit",
            borderRadius,
            maxHeight: 150,
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
            borderRadius,
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
            borderRadius,
            // backgroundColor: "#e9eff6",
            "& fieldset": {
              borderColor: "#e9eff6",
              backgroundColor: "#e9eff6",
            },
            "& input,button,svg": {
              zIndex: 1,
            },
            "&:hover fieldset": {
              borderColor: "#e9eff6 !important",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            zIndex: 1,
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
          borderRadius: 1,
          spacing: 2,
        },
      },
      MuiGrid: {
        defaultProps: {
          spacing: 2,
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: "small",
        },
      },
      MuiSlider: {
        styleOverrides: {
          root: {
            "& .MuiSlider-valueLabel": {
              fontSize: 12,
              p: 1,
              height: 32,
              borderRadius,
              backgroundColor: "#4460f1D8",
            },
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            borderRadius,
          },
        },
      },
    },
  };
};
