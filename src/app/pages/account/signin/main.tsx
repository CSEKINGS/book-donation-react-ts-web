import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Api from "src/api";
import * as React from "react";

const SignInValidation = Yup.object().shape({
  email: Yup.string().required("No email provided").email("Invalid Email"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  remember: Yup.boolean(),
});

export const Main = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const onSubmit = (values: main.Form) => {
    Api.Server.Request("signin", values)
      .then((res) => {
        localStorage.setItem("bdtoken", res.token);
        enqueueSnackbar("Login Successfull!", { variant: "success" });
        customNavigate("/");
      })
      .catch((err) =>
        enqueueSnackbar(`Error: ${err.message}`, {
          variant: "error",
        })
      );
  };

  return (
    <Formik.Formik
      initialValues={{ email: "", password: "", remember: false }}
      validationSchema={SignInValidation}
      onSubmit={onSubmit}
    >
      {() => (
        <Mui.Box component={Formik.Form}>
          <Pages.Account.SignIn.Views.Content />
        </Mui.Box>
      )}
    </Formik.Formik>
  );
};

export declare namespace main {
  export interface Form {
    email: string;
    password: string;
    remember: boolean;
  }
}
