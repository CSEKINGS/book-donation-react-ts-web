import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";
import * as Router from "react-router-dom";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack spacing={3}>
      <Mui.Typography variant="h3">Sign Up</Mui.Typography>
      <Mui.Typography fontSize="medium" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste!
      </Mui.Typography>
      <Mui.TextField
        variant="outlined"
        label="Email"
        placeholder="Joe@mail.com"
      />
      <Mui.TextField
        variant="outlined"
        label="Mobile No"
        placeholder="0000000000"
      />
      <Mui.TextField
        variant="outlined"
        label="Address"
        placeholder="Enter your address"
      />
      <Mui.Stack direction="row" justifyContent="space-between">
        <Mui.TextField
          type="password"
          variant="outlined"
          label="New password"
          placeholder="Min 8 character"
        />
        <Mui.TextField
          type="password"
          variant="outlined"
          label="Confrim password"
          placeholder="Min 8 character"
        />
      </Mui.Stack>
      <MuiLab.LoadingButton fullWidth variant="contained">
        Create new account
      </MuiLab.LoadingButton>
      <Mui.Typography>
        Already have an Account?{" "}
        <Mui.Link component={Router.Link} to="../signin">
          Sign In
        </Mui.Link>
      </Mui.Typography>
    </Mui.Stack>
  </Mui.CardContent>
);
