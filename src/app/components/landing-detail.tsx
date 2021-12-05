import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";
import React from "react";

export const LandingInfo = ({ title, content, index }: landingInfo.Props) => {
  const { customNavigate } = Hooks.useNavigate();
  return (
    <>
      <Mui.Grid item xs={12} md={3}>
        <Mui.Box
          sx={{
            flexGrow: 1,
            height: { xs: 350, sm: 600 },
          }}
        />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Mui.Stack component="div" id={title}>
          <Mui.Typography variant="h3" color="primary">
            {title}
            <MuiIcons.AutoAwesome color="primary" />
          </Mui.Typography>
          <Mui.Typography variant="body2" paragraph>
            {content}
          </Mui.Typography>
          <Mui.Button
            variant="contained"
            sx={{ maxWidth: 150, display: !index ? "flex" : "none" }}
            onClick={() => customNavigate("account/signup")}
            endIcon={<MuiIcons.ArrowForward />}
          >
            Get started
          </Mui.Button>
        </Mui.Stack>
      </Mui.Grid>
      <Mui.Grid
        item
        xs={12}
        md={3}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <Mui.Box
          sx={{
            flexGrow: 1,
            height: 600,
          }}
        ></Mui.Box>
      </Mui.Grid>
    </>
  );
};

export declare namespace landingInfo {
  export interface Props {
    title: string;
    content: React.ReactNode;
    index: number;
  }
}
