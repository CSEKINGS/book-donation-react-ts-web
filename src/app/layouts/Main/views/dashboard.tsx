import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as React from "react";

export const Dashboard = () => {
  const { pathname } = Router.useLocation();
  const { customNavigate } = Hooks.useNavigate();
  const { search, setSearch } = React.useContext(Pages.Search.Hooks.Search);

  const searchRoute = Router.matchPath(
    {
      path: "/search",
      caseSensitive: false,
      end: true,
    },
    pathname
  );

  return (
    <>
      <Mui.Box sx={{ flexGrow: 1 }} />
      <Mui.TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{
          fontSize: "small",
          m: 1,
          width: {
            xs: searchRoute ? "100%" : 115,
            md: searchRoute ? "100%" : "auto",
          },
        }}
        InputProps={{
          startAdornment: (
            <Mui.InputAdornment position="start">
              <MuiIcons.Search color="primary" />
            </Mui.InputAdornment>
          ),
        }}
        onClick={() => customNavigate("search")}
        onChange={(e) => setSearch(e.target.value)}
        fullWidth={searchRoute ? true : false}
        value={search}
      />
      <Mui.IconButton
        sx={{ display: searchRoute ? "flex" : "none" }}
        onClick={() => customNavigate(-1)}
      >
        <MuiIcons.Close />
      </Mui.IconButton>
      <Mui.Stack
        component={Mui.Toolbar}
        direction="row"
        justifyContent="flex-end"
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        {Constants.buttonContent.map((val, index) => (
          <Mui.Chip
            label={val.name}
            color="primary"
            size="medium"
            component={Router.Link}
            to={val.path}
            sx={{
              fontWeight: "bold",
            }}
          />
        ))}
      </Mui.Stack>
    </>
  );
};