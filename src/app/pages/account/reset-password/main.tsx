import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";

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
  localStorage.setItem(
    "bdtoken",
    window.location.search.substring(1).replace("token=", "")
  );

  const onSubmit = (
    values: main.Form,
    formikHelpers: Formik.FormikHelpers<main.Form>
  ) => {
    Api.Server.Request("reset", values)
      .then((res) => {
        localStorage.setItem("bdtoken", res.token);
        enqueueSnackbar("Password Resetted Successfully!", {
          variant: "success",
        });
        formikHelpers.setSubmitting(false);
        customNavigate("/");
      })
      .catch((err) => {
        enqueueSnackbar(`Error: ${err.response.data.message}`, {
          variant: "error",
        });
        formikHelpers.setSubmitting(false);
      });
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
