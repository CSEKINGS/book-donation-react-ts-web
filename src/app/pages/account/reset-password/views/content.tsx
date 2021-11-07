import * as Mui from "@mui/material";
import * as MuiLab from "@mui/lab";

export const Content = () => (
  <Mui.CardContent>
    <Mui.Stack spacing={3}>
      <Mui.Typography variant="h4">Reset password</Mui.Typography>
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
        label="Confirm password"
        placeholder="Min. 8 Character"
      />
      <MuiLab.LoadingButton fullWidth variant="contained" sx={{ height: 53 }}>
        set password
      </MuiLab.LoadingButton>
    </Mui.Stack>
  </Mui.CardContent>
);
