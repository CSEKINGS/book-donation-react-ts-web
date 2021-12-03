import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";
import * as React from "react";

const BuyValidation = Yup.object().shape({
  message: Yup.string().trim().required("No message provided"),
});

export const Buy = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const [loading, setLoading] = React.useState(false);

  const {
    state: {
      book: { _id, name, photo },
    },
  } = Router.useLocation();

  const onSubmit = (
    values: buy.Form,
    formikHelpers: Formik.FormikHelpers<buy.Form>
  ) => {
    Api.Server.Request("buy", { bookId: _id, message: values.message })
      .then((res) => {
        enqueueSnackbar("Message sent, Please wait for replay!", {
          variant: "success",
        });
        customNavigate(-2);
        formikHelpers.setSubmitting(false);
      })
      .catch((err) => {
        enqueueSnackbar(`Error: ${err.response.data.message}`, {
          variant: "error",
        });
        formikHelpers.setSubmitting(false);
      });
  };

  return (
    <Components.Dialog
      open={true}
      title="Buy"
      onConfirm={() => document.getElementById("buy")?.click()}
      loading={loading}
    >
      <Mui.DialogContent>
        <Mui.Stack alignItems="center">
          <Mui.Avatar
            variant="square"
            src={photo}
            sx={{ height: { xs: 200, md: 150 }, width: "100%" }}
          />
          <Mui.Typography variant="h6">{name}</Mui.Typography>
        </Mui.Stack>
        <Formik.Formik
          initialValues={{
            message: "",
          }}
          validationSchema={BuyValidation}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Mui.Box component={Formik.Form}>
              {setLoading(isSubmitting)}
              <Mui.CardContent component={Mui.Stack} alignItems="center">
                <Components.FormField
                  name="message"
                  label="Message"
                  placeholder="Start conversation to the user"
                  // multiline
                  // rows={3}
                  // helperText="Start conversation to the user"
                />
              </Mui.CardContent>
              <Mui.Button type="submit" id="buy" hidden />
            </Mui.Box>
          )}
        </Formik.Formik>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};

export declare namespace buy {
  export interface Form {
    message: string;
  }
}
