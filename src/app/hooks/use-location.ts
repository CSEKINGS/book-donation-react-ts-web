import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as React from "react";

export const useLocation = () => {
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { location } = React.useContext(Hooks.Search);

  const locator = (
    callback: (location: number[]) => void,
    setSubmitting?: (load: boolean) => void
  ) => {
    location
      ? callback(location)
      : navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = [
              position.coords.latitude,
              position.coords.longitude,
            ];
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
