import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as Api from "src/api";

export const useGetBooksByID = (): bookDetail.Type => {
  const { bookId } = Router.useParams();
  const { data, isFetching } = Api.Server.useRequest(["book",bookId], "book", {
    bookId,
  });

  return {
    book: data,
    loading: isFetching,
  };
};

export declare namespace bookDetail {
  export type Type = {
    book: Pages.Books.Views.bookCard.book & bookDetail.Info;
    loading: boolean;
  };
  export interface Info {
    userName: string;
    profile: string;
    // comment: boolean;
    // rating: number;
    // privacy: boolean;
    author: string;
    categeory: string;
    quantity: number;
  }
}
