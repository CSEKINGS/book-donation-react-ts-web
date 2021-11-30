import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Cart = (props: Pages.Profile.Views.sales.Props) => {
  const books = Hooks.useGetBooks().slice(0, 6);
  return (
    <Pages.Profile.Views.ProfileCard title="My Cart" books={books} {...props} />
  );
};
