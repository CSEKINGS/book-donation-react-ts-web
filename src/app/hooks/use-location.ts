import * as Notistack from "notistack";

export const useLocation = () => {
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const locator = (
    callback: (location: number[]) => void,
    setSubmitting?: (load: boolean) => void
  ) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = [position.coords.latitude, position.coords.longitude];
        callback(location);
      },
      (err) => {
        enqueueSnackbar(
          "Please allow to confirm your location for best experinece",
          { variant: "error" }
        );
        setSubmitting?.(false);
      }
    );
  };
  return { locator };
};
