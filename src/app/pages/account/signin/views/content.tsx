import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Router from "react-router-dom";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack spacing={3}>
      <Mui.Typography variant="h3">Sign In</Mui.Typography>
      <Mui.Typography fontSize="medium" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste!
      </Mui.Typography>
      <Mui.TextField
        variant="outlined"
        label="Email"
        placeholder="Joe@mail.com"
      />
      <Mui.TextField
        type="password"
        variant="outlined"
        label="Enter your password"
        placeholder="Min 8 character"
      />
      <Mui.Stack direction="row" justifyContent="space-between">
        <Mui.FormControlLabel control={<Mui.Checkbox />} label="Remember me" />
        <Mui.Link component={Router.Link} to="../forget">
          Forget password?
        </Mui.Link>
      </Mui.Stack>
      <MuiLab.LoadingButton fullWidth variant="contained">
        Login
      </MuiLab.LoadingButton>
      <Mui.Typography>
        Not registered yet?{" "}
        <Mui.Link component={Router.Link} to="../signup">
          Create an Account
        </Mui.Link>
      </Mui.Typography>
    </Mui.Stack>
  </Mui.CardContent>
);
