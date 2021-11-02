import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const AccountButton = (props: Mui.StackProps) => (
  <Mui.Stack direction="row" spacing={2} sx={{ maxWidth: "sm" }} {...props}>
    <Mui.Button
      variant="outlined"
      component={Router.Link}
      to="account/signup"
      endIcon={<MuiIcons.AccessibilityNew />}
    >
      Join
    </Mui.Button>
    <Mui.Button variant="outlined" component={Router.Link} to="account/signin">
      Login
    </Mui.Button>
  </Mui.Stack>
);
