import * as React from "react";

export const Search = React.createContext<{
  search: string;
  setSearch: (set: string) => void;
  location: number[] | undefined;
}>(null);
