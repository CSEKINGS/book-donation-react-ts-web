import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Formik from "formik";

export const Content = () => {
  const {
    values: { profile },
    errors,
  } = Formik.useFormikContext();
  return (
    <Mui.CardContent>
      <Mui.Stack>
        <Mui.Typography variant="h4">Sign Up</Mui.Typography>
        <Mui.Typography fontSize="medium" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, iste!
        </Mui.Typography>
        <Mui.Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Mui.Stack>
            <Components.FormField
              name="name"
              type="name"
              label="Name"
              placeholder="Joe"
            />
            <Components.FormField
              name="mobileNo"
              label="Mobile No"
              placeholder="0000000000"
            />
          </Mui.Stack>
          <Components.Profiler
            name="profile"
            src={profile}
            sx={{
              m: 1,
            }}
            error={errors.profile as string}
          />
        </Mui.Stack>
        <Components.FormField
          name="email"
          type="email"
          label="Email"
          placeholder="Joe@mail.com"
        />
        <Components.FormField
          name="about"
          label="About"
          placeholder="Something about you"
        />
        <Components.FormField
          name="address"
          label="Address"
          placeholder="Enter your address"
          // multiline
          // rows={2}
        />
        <Mui.Stack direction="row" justifyContent="space-between">
          <Components.FormField
            name="password"
            type="password"
            label="New password"
            placeholder="Min 8 character"
          />
          <Mui.Box sx={{ m: 1 }} />
          <Components.FormField
            name="confirmPassword"
            type="password"
            label="Confirm password"
            placeholder="Min 8 character"
          />
        </Mui.Stack>
        <Components.LoadingButton>Create new account</Components.LoadingButton>
        <Mui.Typography>
          Already have an Account?{" "}
          <Mui.Link
            component={Router.Link}
            to="../signin"
            sx={{ textDecoration: "none" }}
          >
            Sign In
          </Mui.Link>
        </Mui.Typography>
      </Mui.Stack>
    </Mui.CardContent>
  );
};
