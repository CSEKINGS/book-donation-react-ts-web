import * as Router from "react-router-dom";
import * as Mui from "@mui/material";

export const Main = () => (
  <>
    <Mui.Typography variant="h5">Sample Layouts</Mui.Typography>
    <Router.Outlet />
  </>
);
