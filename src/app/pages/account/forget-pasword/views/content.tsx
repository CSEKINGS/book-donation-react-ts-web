import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack>
      <Mui.Typography variant="h4">Forget password</Mui.Typography>
      <Mui.Typography fontSize="medium" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste!
      </Mui.Typography>
      <Components.FormField
        name="email"
        type="email"
        label="Email"
        placeholder="Joe@mail.com"
      />
      <Components.LoadingButton>Send Reset Link</Components.LoadingButton>
    </Mui.Stack>
  </Mui.CardContent>
);
