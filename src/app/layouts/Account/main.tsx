import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";

export const Main = () => (
  <Mui.Grid container justifyContent="center" alignItems="center">
    <Mui.Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "flex" } }}>
      <Mui.Container maxWidth="sm">
        <Router.Outlet />
      </Mui.Container>
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Mui.CardMedia
        component="img"
        image={Assets.landingImages.AccountBanner}
        height="600"
      />
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6} sx={{ display: { md: "none" } }}>
      <Mui.Container maxWidth="sm">
        <Router.Outlet />
      </Mui.Container>
    </Mui.Grid>
  </Mui.Grid>
);
