import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Constants from "src/constants";
import * as Components from "src/app/components";

export const Main = () => (
  <Mui.Box>
    <Mui.AppBar color="secondary" elevation={1}>
      <Mui.Toolbar>
        <MuiIcons.CollectionsBookmark color="primary" sx={{ m: 1 }} />
        <Mui.Typography variant="h6" noWrap>
          Book Donation
        </Mui.Typography>
        <Mui.Box sx={{ flexGrow: 1 }} />
        <Mui.Stack
          direction="row"
          spacing={5}
          color="GrayText"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {Constants.landingDetail.map((value, index) => (
            <Mui.Button
              variant="text"
              color="inherit"
              key={index}
              href={`#${value.title}`}
            >
              {value.title}
            </Mui.Button>
          ))}
        </Mui.Stack>
        <Mui.Box sx={{ flexGrow: 1 }} />
        <Components.AccountButton />
      </Mui.Toolbar>
    </Mui.AppBar>
    <Mui.Container maxWidth="lg">
      <Router.Outlet />
    </Mui.Container>
  </Mui.Box>
);
