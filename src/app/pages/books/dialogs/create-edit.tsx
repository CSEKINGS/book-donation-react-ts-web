import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";
import * as Formik from "formik";
import * as Yup from "yup";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as React from "react";

const BookValidation = Yup.object().shape({
  image: Yup.string().required("No book image provided"),
  title: Yup.string().required("No book name provided").trim(),
  description: Yup.string().trim(),
  author: Yup.string().required("No auhtor name provided").trim(),
  categeory: Yup.string().required("No categeory provided").trim(),
  quantity: Yup.number(),
  setlocation: Yup.boolean(),
});

export const CreateEdit = ({ variant }: createEdit.Props) => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { location } = React.useContext(Pages.Search.Hooks.Search);

  const {
    state: { book },
  } = Router.useLocation();

  const onSubmit = async (
    values: Pages.Books.Views.bookCard.book & { setlocation: boolean },
    formikHelpers: Formik.FormikHelpers<Pages.Books.Views.bookCard.book>
  ) => {
    console.log(values, location);
    const callback = () => {
      formikHelpers.setSubmitting(false);
      enqueueSnackbar(
        variant === "create"
          ? `${values.title} book was created`
          : `${book.title} book info updated!`,
        {
          variant: "success",
        }
      );
      customNavigate(-1);
    };
    values.setlocation
      ? location
        ? callback()
        : navigator.geolocation.getCurrentPosition(
            (position) => {
              const location = [
                position.coords.latitude,
                position.coords.longitude,
              ];
              console.log(location);
              callback();
            },
            (err) =>
              enqueueSnackbar(
                "Please allow to confirm your location for best experinece",
                { variant: "error" }
              )
          )
      : callback();
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
                  id: "",
                  title: "",
                  description: "",
                  author: "",
                  categeory: "",
                  quantity: 1,
                  time: "",
                  image: "",
                  setlocation: false,
                }
          }
          validationSchema={BookValidation}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched }) => (
            <Mui.Box component={Formik.Form}>
              <Mui.Stack alignItems="center">
                <Components.Profiler
                  name="image"
                  src={values.image}
                  width="100%"
                  sx={{
                    height: { xs: 200, md: 150 },
                    width: "inherit",
                  }}
                  error={touched.image ? (errors.image as string) : undefined}
                >
                  <MuiIcons.AddAPhoto fontSize="large" />
                </Components.Profiler>
                <Components.FormField
                  name="title"
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
