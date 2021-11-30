import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Main = () => (
  <Mui.Grid container justifyContent="center" alignItems="center">
    <Mui.Grid item xs={12} md={6}>
      <Mui.Container maxWidth="xs" sx={{ my: { xs: 5, md: 1 } }}>
        <MuiIcons.AutoAwesome color="primary" />
        <Router.Outlet />
      </Mui.Container>
    </Mui.Grid>
    <Mui.Grid item xs={6} sx={{ display: { xs: "none", md: "flex" } }}>
      <Mui.Box
        sx={{
          flexGrow: 1,
          bgcolor: (theme) => theme.palette.primary.main,
          minHeight: "100vh",
          height: "100%",
        }}
      />
    </Mui.Grid>
  </Mui.Grid>
);
