import * as Mui from "@mui/material";

export const NothigToShow = () => (
  <Mui.Typography
    color="text.secondary"
    variant="body2"
    textAlign="center"
    sx={{
      width: "100%",
      bgcolor: (theme) => theme.palette.secondary.main,
      p: 5,
      m: 2,
    }}
  >
    Nothing to show
  </Mui.Typography>
);
