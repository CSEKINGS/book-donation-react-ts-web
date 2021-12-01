import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack>
      <Mui.Typography variant="h4">Sign In</Mui.Typography>
      <Mui.Typography fontSize="medium" color="text.secondary">
        Start your book sharing with better Experience
      </Mui.Typography>
      <Components.FormField
        name="email"
        type="email"
        label="Email"
        placeholder="Joe@mail.com"
      />
      <Components.FormField
        name="password"
        type="password"
        label="Enter your password"
        placeholder="Min 8 character"
      />
      <Mui.Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Mui.Link
          component={Router.Link}
          to="../forget"
          sx={{ textDecoration: "none" }}
        >
          Forget password?
        </Mui.Link>
      </Mui.Stack>
      <Components.LoadingButton>Login</Components.LoadingButton>
      <Mui.Typography>
        Not registered yet?{" "}
        <Mui.Link
          component={Router.Link}
          to="../signup"
          sx={{ textDecoration: "none" }}
        >
          Create an Account
        </Mui.Link>
      </Mui.Typography>
    </Mui.Stack>
  </Mui.CardContent>
);
