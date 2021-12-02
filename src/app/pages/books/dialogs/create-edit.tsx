import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";

const BookValidation = Yup.object().shape({
  photo: Yup.string().required("No book image provided"),
  name: Yup.string().required("No book name provided").trim(),
  description: Yup.string().trim(),
  author: Yup.string().required("No auhtor name provided").trim(),
  categeory: Yup.string().required("No categeory provided").trim(),
  quantity: Yup.number(),
  setlocation: Yup.boolean(),
});

export const CreateEdit = ({ variant }: createEdit.Props) => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { locator } = Hooks.useLocation();

  const {
    state: { book },
  } = Router.useLocation();

  const onSubmit = (
    values: Pages.Books.Views.bookCard.book & { setlocation?: boolean },
    formikHelpers: Formik.FormikHelpers<Pages.Books.Views.bookCard.book>
  ) => {
    const callback = (location: number[]) => {
      (variant === "create"
        ? Api.Server.Request("createBook", {
            ...values,
            location,
          })
        : Api.Server.Request("bookEdit", {
            ...values,
            bookId: book?._id,
            location,
          })
      )
        .then((res) => {
          enqueueSnackbar(
            variant === "create"
              ? `${values.name} book was created`
              : `${book?.name} book info updated!`,
            {
              variant: "success",
            }
          );
          customNavigate(-1);
          formikHelpers.setSubmitting(false);
        })
        .catch((err) => {
          enqueueSnackbar(`Error: ${err.response.data.message}`, {
            variant: "error",
          });
          formikHelpers.setSubmitting(false);
        });
    };
    values.setlocation
      ? locator(callback, formikHelpers.setSubmitting)
      : callback(variant === "create" ? [] : book?.location);
  };

  return (
    <Components.Dialog
      open={true}
      title={variant === "create" ? "create new book" : "update book info"}
      onConfirm={() => document.getElementById("create-edit")?.click()}
    >
      <Mui.DialogContent>
        <Formik.Formik
          initialValues={
            variant !== "create"
              ? { ...book, setlocation: false }
              : {
                  name: "",
                  description: "",
                  author: "",
                  categeory: "",
                  quantity: 1,
                  photo: "",
                  setlocation: false,
                }
          }
          validationSchema={BookValidation}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, isSubmitting }) => (
            <Mui.Box component={Formik.Form}>
              {isSubmitting && <Mui.LinearProgress />}
              <Mui.Stack alignItems="center">
                <Components.Profiler
                  name="photo"
                  src={values.photo}
                  width="100%"
                  sx={{
                    height: { xs: 200, md: 150 },
                    width: "inherit",
                  }}
                  error={touched.photo ? (errors.photo as string) : undefined}
                >
                  <MuiIcons.AddAPhoto fontSize="large" />
                </Components.Profiler>
                <Components.FormField
                  name="name"
                  label="Book Name"
                  placeholder="C, C++"
                />
                <Components.FormField
                  name="author"
                  label="Author"
                  placeholder="Joe davis"
                />
                <Components.FormField
                  name="categeory"
                  label="Categeory"
                  placeholder="Computer Science"
                />
                <Components.FormField
                  name="quantity"
                  label="Quantity"
                  placeholder="1"
                  type="number"
                />
                <Components.FormField
                  name="description"
                  label="Description"
                  placeholder="Something about your Book"
                  // multiline
                  // rows={2}
                />
                <Mui.Box>
                  <Components.CheckBox
                    name="setlocation"
                    label="Get my current location"
                  />
                </Mui.Box>
              </Mui.Stack>
              <Mui.Button type="submit" id="create-edit" hidden />
            </Mui.Box>
          )}
        </Formik.Formik>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};

export declare namespace createEdit {
  export interface Props {
    variant: "create" | "edit";
  }
}
