import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Api from "src/api";

export const SignUpValidation = Yup.object().shape({
  profile: Yup.string(),
  name: Yup.string().required("No username provided").trim(),
  email: Yup.string().required("No email provided").email("Invalid Email"),
  mobileNo: Yup.string()
    .required("No Mobile no provided")
    .matches(/[0-9]/, "Please enter valid number")
    .min(10, "Please enter valid number")
    .max(10, "Please enter valid number"),
  address: Yup.string()
    .required("No address provided")
    .max(150, "Address too long"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const additional = Yup.object().shape({
  confirmPassword: Yup.string()
    .required("No password provided.")
    .oneOf([Yup.ref("password"), null], "Password doesn't match"),
});

export const Main = () => {
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { customNavigate } = Hooks.useNavigate();
  const { locator } = Hooks.useLocation();

  const onSubmit = (
    values: Exclude<main.Form, "location">,
    formikHelpers: Formik.FormikHelpers<Exclude<main.Form, "location">>
  ) => {
    const { profile, name, about, email, password, mobileNo, address } = values;
    const callback = async (location: number[]) => {
      Api.Server.Request("signup", {
        photo: profile,
        name,
        about,
        email,
        mobileNo,
        address,
        location,
        password,
      })
        .then((res) => {
          localStorage.setItem("bdtoken", res.token);
          localStorage.setItem("refreshToken", res.refreshToken);
          formikHelpers.setSubmitting(false);
          customNavigate("/");
          window.location.reload();
        })
        .catch((err) => {
          enqueueSnackbar(`Error: ${err.response.data.message}`, {
            variant: "error",
          });
          formikHelpers.setSubmitting(false);
        });
    };

    locator(callback, formikHelpers.setSubmitting);
  };

  return (
    <Formik.Formik
      initialValues={{
        profile: "",
        name: "",
        email: "",
        mobileNo: "",
        about: "",
        address: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpValidation.concat(additional)}
      onSubmit={onSubmit}
    >
      {() => (
        <Mui.Box component={Formik.Form}>
          <Pages.Account.SignUp.Views.Content />
        </Mui.Box>
      )}
    </Formik.Formik>
  );
};

export declare namespace main {
  export interface Form {
    profile: string;
    name: string;
    email: string;
    mobileNo: string;
    about: string;
    address: string;
    password: string;
    location?: boolean;
    confirmPassword?: string;
  }
}
