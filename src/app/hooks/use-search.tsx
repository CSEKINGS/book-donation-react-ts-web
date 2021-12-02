import * as React from "react";
import type * as Hooks from "src/app/hooks";

export const Search = React.createContext<{
  search: string;
  setSearch: (set: string) => void;
  location: number[] | undefined;
  user: Hooks.profile.Info;
}>(null);
