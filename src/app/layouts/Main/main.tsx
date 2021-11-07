import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Layouts from "src/app/layouts";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Main = () => {
  const { pathname } = Router.useLocation();
  const landing = Router.matchPath(
    {
      path: "/",
      caseSensitive: false,
      end: true,
    },
    pathname
  );
  const Auth = true;

  return (
    <Mui.Box>
      <Mui.AppBar color="secondary" elevation={0}>
        <Mui.Toolbar>
          <Mui.Button
            component={Router.Link}
            to="dashboard"
            startIcon={
              <MuiIcons.CollectionsBookmark color="primary" sx={{ m: 1 }} />
            }
          >
            <Mui.Typography variant="h6" noWrap>
              Book Donation
            </Mui.Typography>
          </Mui.Button>
          {landing ? (
            <Layouts.MainLayout.Views.Landing />
          ) : (
            <Layouts.MainLayout.Views.Dashboard />
          )}
          {Auth ? (
            <Mui.IconButton component={Router.Link} to="profile">
              <Mui.Avatar />
            </Mui.IconButton>
          ) : (
            <Components.AccountButton />
          )}
        </Mui.Toolbar>
      </Mui.AppBar>
      <Mui.Container maxWidth="lg" sx={{ pt: 10 }}>
        <Router.Outlet />
      </Mui.Container>
    </Mui.Box>
  );
};
