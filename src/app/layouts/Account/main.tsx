import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Main = () => (
  <Mui.Grid container justifyContent="center" alignItems="center" spacing={5}>
    <Mui.Grid item xs={6} sx={{ display: { xs: "none", sm: "flex" } }}>
      <Mui.Container maxWidth="xs">
        <MuiIcons.AutoAwesome color="primary" />
        <Router.Outlet />
      </Mui.Container>
    </Mui.Grid>
    <Mui.Grid item xs={6} sx={{ display: { xs: "none", sm: "flex" } }}>
      <Mui.Box
        sx={{
          flexGrow: 1,
          bgcolor: (theme) => theme.palette.primary.main,
          height: "100vh",
        }}
      ></Mui.Box>
    </Mui.Grid>
    <Mui.Grid item xs={12} sx={{ display: { sm: "none" } }}>
      <Mui.Container maxWidth="xs" sx={{ my: 5 }}>
        <MuiIcons.AutoAwesome color="primary" />
        <Router.Outlet />
      </Mui.Container>
    </Mui.Grid>
  </Mui.Grid>
);
