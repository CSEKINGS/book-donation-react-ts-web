import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Router from "react-router-dom";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack spacing={3}>
      <Mui.Typography variant="h4">Forget password</Mui.Typography>
      <Mui.Typography fontSize="medium" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste!
      </Mui.Typography>
      <Mui.TextField
        variant="outlined"
        label="Email"
        placeholder="Joe@mail.com"
      />
      <MuiLab.LoadingButton fullWidth variant="contained" sx={{ height: 53 }}>
        Send Reset Link
      </MuiLab.LoadingButton>
    </Mui.Stack>
  </Mui.CardContent>
);
