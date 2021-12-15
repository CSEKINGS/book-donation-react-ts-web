import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Cart = (props: Pages.Profile.Views.sales.Props) => {
  const { books } = Hooks.useGetBooks(props.role);
  return (
    <Pages.Profile.Views.ProfileCard
      title="My Cart"
      books={books?.slice(0, 6)}
      {...props}
    />
  );
};
