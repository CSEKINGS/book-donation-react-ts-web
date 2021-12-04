import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Assets from "src/assets";

export const Main = () => (
  <Mui.Grid container justifyContent="center" alignItems="center">
    <Mui.Grid item xs={12} md={5}>
      <Mui.Container maxWidth="xs" sx={{ my: { xs: 5, md: 1 } }}>
        <MuiIcons.AutoAwesome color="primary" />
        <Router.Outlet />
      </Mui.Container>
    </Mui.Grid>
    <Mui.Grid item xs={7} sx={{ display: { xs: "none", md: "flex" } }}>
      <Mui.CardMedia
        component="img"
        image={Assets.landingImages.AccountImage}
        sx={{
          minHeight: "100vh",
          borderRadius: 20,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
      />
    </Mui.Grid>
  </Mui.Grid>
);
