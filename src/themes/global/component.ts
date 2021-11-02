import * as Mui from "@mui/material";

export const components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 7,
      },
    },
  },
});
