import * as Mui from "@mui/material";
import * as Constants from "src/constants";

export const Landing = () => (
  <>
    <Mui.Box sx={{ flexGrow: 1 }} />
    <Mui.Stack
      direction="row"
      spacing={5}
      color="GrayText"
      sx={{ display: { xs: "none", sm: "flex" } }}
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
  </>
);
