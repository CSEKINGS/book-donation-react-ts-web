import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Constants from "src/constants";

export const Main = () => (
  <Mui.Grid container alignItems="center" justifyContent="center" spacing={3}>
    {Constants.landingDetail.map((value, index) => (
      <Components.LandingInfo key={index} {...value} />
    ))}
    <Mui.Fab
      variant="extended"
      size="medium"
      color="primary"
      sx={{ position: "fixed", right: 10, bottom: 10 }}
    >
      <MuiIcons.Download sx={{ mr: 1 }} />
      Flutter
    </Mui.Fab>
  </Mui.Grid>
);
