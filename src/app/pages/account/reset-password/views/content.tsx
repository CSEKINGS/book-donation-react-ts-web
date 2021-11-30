import * as Mui from "@mui/material";
import * as Components from "src/app/components";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack>
      <Mui.Typography variant="h4">Reset password</Mui.Typography>
      <Mui.Typography fontSize="medium" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste!
      </Mui.Typography>
      <Components.FormField
        name="password"
        type="password"
        label="Enter your password"
        placeholder="Min 8 character"
      />
      <Components.FormField
        name="confirmPassword"
        type="password"
        label="Re-Enter your password"
        placeholder="Must be same to above"
      />
      <Components.LoadingButton>set password</Components.LoadingButton>
    </Mui.Stack>
  </Mui.CardContent>
);
