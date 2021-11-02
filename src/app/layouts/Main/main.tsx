import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Main = () => (
  <Mui.Box>
    <Mui.AppBar color="secondary" elevation={1}>
      <Mui.Toolbar>
        <Mui.Button
          component={Router.Link}
          to="../dashboard"
          startIcon={
            <MuiIcons.CollectionsBookmark color="primary" sx={{ m: 1 }} />
          }
        >
          <Mui.Typography variant="h6" noWrap>
            Book Donation
          </Mui.Typography>
        </Mui.Button>
        <Mui.Box sx={{ flexGrow: 1 }} />
        <Mui.TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          sx={{ fontSize: "small", maxWidth: 150, m: 1 }}
          InputProps={{
            endAdornment: (
              <Mui.InputAdornment position="end">
                <MuiIcons.Search />
              </Mui.InputAdornment>
            ),
          }}
        />
        <Mui.Avatar />
      </Mui.Toolbar>
    </Mui.AppBar>
    <Mui.Container maxWidth="lg" sx={{ pt: 10 }}>
      <Router.Outlet />
    </Mui.Container>
  </Mui.Box>
);
