import * as Formik from "formik";
import * as Mui from "@mui/material";
import * as FormikMui from "formik-mui";

export const CheckBox = (props: checkBox.Type) => (
  <Formik.Field component={MuiCheckBox} type="checkbox" {...props} />
);

export const MuiCheckBox = ({
  label,
  helperText,
  ...props
}: FormikMui.TextFieldProps) => (
  <Mui.FormControlLabel
    control={
      <Mui.Checkbox
        {...(FormikMui.fieldToTextField(props) as Mui.CheckboxProps)}
      />
    }
    label={label as string}
  />
);

export declare namespace checkBox {
  export type Type = Partial<Mui.CheckboxProps> & { label: string };
}
