import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import React from "react";

export const LandingInfo = ({ title, content, action }: landingInfo.Props) => (
  <>
    <Mui.Grid item xs={12} md={3}>
      <Mui.Box
        sx={{
          flexGrow: 1,
          height: { xs: 350, md: 600 },
        }}
      ></Mui.Box>
    </Mui.Grid>
    <Mui.Grid item xs={12} md={6}>
      <Mui.Stack spacing={3} component="div" id={title}>
        <Mui.Typography variant="h3" color="primary">
          {title}
          <MuiIcons.AutoAwesome color="primary" />
        </Mui.Typography>
        <Mui.Typography variant="body2" paragraph>
          {content}
        </Mui.Typography>
        <Mui.Button
          variant="contained"
          sx={{ maxWidth: 150 }}
          onClick={action}
          endIcon={<MuiIcons.ArrowForward />}
        >
          Get started
        </Mui.Button>
      </Mui.Stack>
    </Mui.Grid>
    <Mui.Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "flex" } }}>
      <Mui.Box
        sx={{
          flexGrow: 1,
          height: 600,
        }}
      ></Mui.Box>
    </Mui.Grid>
  </>
);

export declare namespace landingInfo {
  export interface Props {
    title: string;
    content: React.ReactNode;
    action: () => void;
  }
}
