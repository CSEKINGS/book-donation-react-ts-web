import * as Notistack from "notistack";
import * as Pages from "src/app/pages";
import * as React from "react";

export const useLocation = () => {
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { location } = React.useContext(Pages.Search.Hooks.Search);
  const locator = (callback: (location: number[]) => void) => {
    location
      ? callback(location)
      : navigator.geolocation.getCurrentPosition(
          (position) => {
            const location = [
              position.coords.latitude,
              position.coords.longitude,
            ];
            console.log(location);
            callback(location);
          },
          (err) =>
            enqueueSnackbar(
              "Please allow to confirm your location for best experinece",
              { variant: "error" }
            )
        );
  };
  return { locator };
};
