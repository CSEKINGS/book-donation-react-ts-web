import * as MuiLab from "@mui/lab";
import * as Formik from "formik";

export const LoadingButton = (props: MuiLab.LoadingButtonProps) => {
  const formikHelpers = Formik.useFormikContext();
  return (
    <MuiLab.LoadingButton
      type="submit"
      fullWidth
      variant="contained"
      sx={{ height: 53 }}
      loading={formikHelpers.isSubmitting}
      // loadingPosition="end"
      {...props}
    />
  );
};
