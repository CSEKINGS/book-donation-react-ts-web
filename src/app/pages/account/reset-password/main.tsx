import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";

const ResetValidation = Yup.object().shape({
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: Yup.string()
    .required("No password provided.")
    .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});

export const Main = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const onSubmit = async (
    values: main.Form,
    formikHelpers: Formik.FormikHelpers<main.Form>
  ) => {
    console.log(values);
    formikHelpers.setSubmitting(false);
    enqueueSnackbar("Password Resetted Successfully!", { variant: "success" });
    customNavigate("/");
  };

  return (
    <Formik.Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={ResetValidation}
      onSubmit={onSubmit}
    >
      {() => (
        <Mui.Box component={Formik.Form}>
          <Pages.Account.Reset.Views.Content />
        </Mui.Box>
      )}
    </Formik.Formik>
  );
};

export declare namespace main {
  export interface Form {
    password: string;
    confirmPassword: string;
  }
}
