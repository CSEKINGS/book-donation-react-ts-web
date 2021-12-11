import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";
import * as Formik from "formik";
import * as Router from "react-router-dom";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as Yup from "yup";
import * as Api from "src/api";
import * as React from "react";

const additional = Yup.object().shape({
  location: Yup.boolean(),
});

export const UserEdit = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { locator } = Hooks.useLocation();
  const [loading, setLoading] = React.useState(false);

  const {
    state: { user },
  } = Router.useLocation();

  const onSubmit = (
    values: Exclude<Pages.Account.SignUp.main.Form, "confirmPassword">,
    formikHelpers: Formik.FormikHelpers<
      Exclude<Pages.Account.SignUp.main.Form, "confirmPassword">
    >
  ) => {
    const { profile, name, about, email, password, mobileNo, address } = values;
    const callback = (location: number[]) => {
      Api.Server.Request("userEdit", {
        photo: profile,
        name,
        about,
        email,
        mobileNo,
        address,
        location,
        password,
      })
        .then(() =>
          Api.Server.Request("token").then((res) => {
            localStorage.setItem("bdtoken", res.token);
            enqueueSnackbar("Your profile updated successfully!", {
              variant: "success",
            });
            customNavigate(-1);
            formikHelpers.setSubmitting(false);
          })
        )
        .catch((err) => {
          enqueueSnackbar(`Error: ${err.response.data.message}`, {
            variant: "error",
          });
          formikHelpers.setSubmitting(false);
        });
    };
    values.location
      ? locator(callback, formikHelpers.setSubmitting)
      : callback(user.location);
  };

  return (
    <Components.Dialog
      open={true}
      title="Edit your profile"
      onConfirm={() => document.getElementById("user-edit")?.click()}
      loading={loading}
    >
      <Mui.DialogContent>
        <Formik.Formik
          initialValues={{ ...user, location: false, password: "" }}
          validationSchema={Pages.Account.SignUp.SignUpValidation.concat(
            additional
          )}
          onSubmit={onSubmit}
        >
          {({ values: { profile }, errors, isSubmitting }) => (
            <Mui.Box component={Formik.Form}>
              <Mui.CardContent component={Mui.Stack}>
                {setLoading(isSubmitting)}
                <Mui.Stack direction="row" justifyContent="space-between">
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
                  disabled
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
                <Components.CheckBox
                  name="location"
                  label="Update my current location"
                />
                <Components.FormField
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Min 8 character"
                  helperText="Please enter password to update your profile"
                />
              </Mui.CardContent>
              <Mui.Button type="submit" id="user-edit" hidden />
            </Mui.Box>
          )}
        </Formik.Formik>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
