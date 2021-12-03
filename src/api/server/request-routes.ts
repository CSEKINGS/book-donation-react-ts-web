import * as Axios from "axios";

export const Routes: {
  [key: string]: Pick<Axios.AxiosRequestConfig, "method" | "url">;
} = {
  signin: { method: "post", url: "auth/login" },
  signup: { method: "post", url: "auth/register" },
  token: { method: "get", url: "token" },
  user: { method: "get", url: "user/detail" },
  userEdit: { method: "put", url: "user/edit" },
  userDelete: { method: "delete", url: "user/delete" },
  notification: { method: "get", url: "user/notification" },
  cartList: { method: "get", url: "user/wishlist" },
  cartRemove: { method: "post", url: "user/removewish" },
  cart: { method: "post", url: "user/wish" },
  createBook: { method: "post", url: "books/create" },
  bookEdit: { method: "put", url: "books/edit" },
  bookDelete: { method: "delete", url: "books/delete" },
  book: { method: "post", url: "books/detail" },
  books: { method: "get", url: "books/all/:no" },
  booksTitle: { method: "get", url: "books/title" },
  search: { method: "get", url: "books/search/:no" },
  buy: { method: "post", url: "buy/request" },
  owner: { method: "post", url: "buy/owner" },
  dashboard: { method: "get", url: "books/dashboard" },
};
