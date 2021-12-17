import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Layouts from "src/app/layouts";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as API from "src/api";
import * as React from "react";

export const Main = () => {
  const { pathname } = Router.useLocation();
  const { user } = Hooks.useSignInCheck();
  const { notifications } = Pages.Profile.Hooks.useGetNotifications();

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

  user?.signin
    ? React.useEffect(() => {
        notifications &&
          Object.values(notifications)?.forEach((notification) =>
            API.Socket.socket.emit("online", notification.message.chatId)
          );
      }, [notifications])
    : null;
  // setSearch(searchRoute ? search : "");

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
            <Mui.Typography variant="h6" noWrap>
              Book Donation
            </Mui.Typography>
          </Mui.Button>
          {landing ? (
            <Layouts.MainLayout.Views.Landing />
          ) : (
            <Layouts.MainLayout.Views.Dashboard />
          )}
          {user?.signin ? (
            <Mui.IconButton
              component={Router.Link}
              to="profile"
              sx={{ border: 0 }}
            >
              {notifications && Object.values(notifications).length ? (
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
                      {Object.values(notifications).length}
                    </Mui.Avatar>
                  }
                >
                  <Mui.Avatar src={user?.profile} />
                </Mui.Badge>
              ) : (
                <Mui.Avatar src={user?.profile} />
              )}
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
