import * as Pages from "src/app/pages";
import * as Api from "src/api";

export const useGetBooks = (): Books.Type => {
  const { data, isFetching } = Api.Server.useRequest(["books"], "books");
  return {
    books: data,
    loading: isFetching,
  };
};

export declare namespace Books {
  export type Type = {
    books: Pages.Books.Views.bookCard.book[];
    loading: boolean;
  };
}
