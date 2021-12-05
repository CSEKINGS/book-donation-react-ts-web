import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Constants from "src/constants";

export const Main = () => (
  <Mui.Grid
    container
    alignItems="center"
    justifyContent="center"
    // sx={{
    //   background: 'url("src/assets/landing-images/564_generated.jpg")',
    //   backgroundRepeat: "no-repeat",
    //   backgroundAttachment: "fixed",
    //   backgroundSize: "cover",
    // }}
  >
    {Constants.landingDetail.map((value, index) => (
      <Components.LandingInfo key={index} index={index} {...value} />
    ))}
    <Mui.Fab
      variant="extended"
      size="small"
      color="primary"
      sx={{ position: "fixed", right: 10, bottom: 10, fontSize: "small" }}
    >
      <MuiIcons.Download sx={{ mr: 1 }} />
      APK
    </Mui.Fab>
  </Mui.Grid>
);
