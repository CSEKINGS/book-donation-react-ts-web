import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Sales = (props: sales.Props) => {
  const { books, loading } = Hooks.useGetBooks(props.role);
  return (
    <Pages.Profile.Views.ProfileCard
      title="My Books"
      books={books?.slice(0, 6)}
      {...props}
    />
  );
};
export declare namespace sales {
  export interface Props {
    path: string;
    role: bookRole.Roles;
  }
}
