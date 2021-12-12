import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as FormikMui from "formik-mui";
import * as React from "react";

export const FormField = (props: Partial<Mui.TextFieldProps>) => (
  <Formik.Field
    component={props.type === "password" ? MuiPasswordField : MuiTextField}
    {...props}
  />
);

export const MuiTextField = (props: FormikMui.TextFieldProps) => (
  <Mui.TextField
    variant="outlined"
    fullWidth
    {...FormikMui.fieldToTextField(props)}
  />
);

export const MuiPasswordField = ({
  type,
  ...props
}: FormikMui.TextFieldProps) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <Mui.TextField
      variant="outlined"
      fullWidth
      {...FormikMui.fieldToTextField(props)}
      type={visible ? "text" : type}
      InputProps={{
        endAdornment: (
          <Mui.IconButton onClick={() => setVisible(!visible)}>
            {visible ? (
              <MuiIcons.VisibilityOff fontSize="inherit" />
            ) : (
              <MuiIcons.Visibility fontSize="inherit" />
            )}
          </Mui.IconButton>
        ),
      }}
    />
  );
};
