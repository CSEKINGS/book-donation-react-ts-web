import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Api from "src/api";

const ForgetValidation = Yup.object().shape({
  email: Yup.string().required("No email provided").email("Invalid Email"),
});

export const Main = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const onSubmit = (
    values: main.Form,
    formikHelpers: Formik.FormikHelpers<main.Form>
  ) => {
    Api.Server.Request("forget", values)
      .then((res) => {
        localStorage.setItem("bdtoken", res.token);
        enqueueSnackbar(`Password reset link sent to ${values.email}!`, {
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
      initialValues={{ email: "" }}
      validationSchema={ForgetValidation}
      onSubmit={onSubmit}
    >
      {() => (
        <Mui.Box component={Formik.Form}>
          <Pages.Account.Forget.Views.Content />
        </Mui.Box>
      )}
    </Formik.Formik>
  );
};
export declare namespace main {
  export interface Form {
    email: string;
  }
}
