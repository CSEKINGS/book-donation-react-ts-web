import * as Routes from "src/app/routes";
import * as Components from "src/app/components";

export const Main = () => (
  <Components.AppProvider>
    <Routes.Main />
  </Components.AppProvider>
);
