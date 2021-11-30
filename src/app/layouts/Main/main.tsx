import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Layouts from "src/app/layouts";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as React from "react";
import * as Hooks from "src/app/hooks";

export const Main = () => {
  const { pathname } = Router.useLocation();
  const { search, setSearch } = React.useContext(Pages.Search.Hooks.Search);

  const landing = Router.matchPath(
    {
      path: "/",
      caseSensitive: false,
      end: true,
    },
    pathname
  );

  const searchRoute = Router.matchPath(
    {
      path: "/search",
      caseSensitive: false,
      end: true,
    },
    pathname
  );

  const {
    user: { signin, profile },
  } = Hooks.useSignInCheck();

  setSearch(searchRoute ? search : "");

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
            sx={{ display: searchRoute ? "none" : "flex" }}
          >
            <Mui.Typography
              variant="h6"
              noWrap
              sx={{ display: { xs: "none", md: "block" } }}
            >
              Book Donation
            </Mui.Typography>
          </Mui.Button>
          {landing ? (
            <Layouts.MainLayout.Views.Landing />
          ) : (
            <Layouts.MainLayout.Views.Dashboard />
          )}
          {signin ? (
            <Mui.IconButton
              component={Router.Link}
              to="profile"
              sx={{ border: 0 }}
            >
              <Mui.Badge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                badgeContent={
                  <Mui.Avatar
                    alt="Notifications"
                    sx={{
                      height: 15,
                      width: 15,
                      bgcolor: (theme) => theme.palette.success.main,
                      fontSize: 10,
                    }}
                  >
                    5
                  </Mui.Avatar>
                }
              >
                <Mui.Avatar src={profile} />
              </Mui.Badge>
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
