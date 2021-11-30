import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";

const ForgetValidation = Yup.object().shape({
  email: Yup.string().required("No email provided").email("Invalid Email"),
});

export const Main = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const onSubmit = async (
    values: main.Form,
    formikHelpers: Formik.FormikHelpers<main.Form>
  ) => {
    console.log(values);
    enqueueSnackbar(`Password reset link sent to ${values.email}!`, {
      variant: "success",
    });
    formikHelpers.setSubmitting(false);
    customNavigate("../../dashboard");
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
