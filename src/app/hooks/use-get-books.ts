import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";
import * as React from "react";

export const useGetBooks = (role: bookRole.Roles): Books.Type => {
  const { user } = React.useContext(Hooks.Search);
  const { data, isFetching } = Api.Server.useRequest(
    ["books", role],
    role === "cart" ? "cartList" : "books"
  );
  return {
    books: {
      mine: data?.filter(
        (book: Pages.Books.Views.bookCard.book) => book.userID === user._id
      ),
      cart: data,
      books: data?.filter(
        (book: Pages.Books.Views.bookCard.book) =>
          book.userID !== user._id &&
          book.wishedUsers?.indexOf(user._id) === -1 &&
          !JSON.stringify(book.receiverID).includes(user._id)
      ),
      related: data?.filter(
        (book: Pages.Books.Views.bookCard.book) =>
          book.userID !== user._id && book.wishedUsers?.indexOf(user._id) === -1
      ),
      buy: data?.filter(
        (book: Pages.Books.Views.bookCard.book) =>
          book.receiverID && JSON.stringify(book.receiverID).includes(user._id)
      ),
    }[role],
    loading: isFetching,
  };
};

export declare namespace Books {
  export type Type = {
    books: Pages.Books.Views.bookCard.book[];
    loading: boolean;
  };
}
