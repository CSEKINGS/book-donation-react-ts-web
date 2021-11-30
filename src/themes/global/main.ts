import * as Themes from "src/themes";

export const Main = () => ({
  ...Themes.Global.components(),
  ...Themes.Global.palette(),
  ...Themes.Global.typography(),
});
