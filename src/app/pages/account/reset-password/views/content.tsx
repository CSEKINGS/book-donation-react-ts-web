import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Router from "react-router-dom";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack spacing={3}>
      <Mui.Typography variant="h3">Reset password</Mui.Typography>
      <Mui.Typography fontSize="medium" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste!
      </Mui.Typography>
      <Mui.TextField
        type="password"
        variant="outlined"
        label="New password"
        placeholder="Min. 8 Character"
      />
      <Mui.TextField
        type="password"
        variant="outlined"
        label="Confrim password"
        placeholder="Min. 8 Character"
      />
      <MuiLab.LoadingButton fullWidth variant="contained">
        set password
      </MuiLab.LoadingButton>
    </Mui.Stack>
  </Mui.CardContent>
);
