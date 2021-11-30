import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";

export const ActionButtons = ({
  bookAction,
  book,
  ...props
}: actionButtons.Type) => {
  const { pathname } = Router.useLocation();
  const isBookDetailRoute = Router.matchPath(
    {
      path: "/books/:bookId",
      caseSensitive: true,
      end: false,
    },
    pathname
  );
  const { customNavigate } = Hooks.useNavigate();

  const Icon = {
    buy: <MuiIcons.AttachMoney fontSize="small" />,
    cart: <MuiIcons.AddShoppingCart fontSize="small" />,
    change: <MuiIcons.Edit fontSize="small" />,
    delete: <MuiIcons.Delete fontSize="small" />,
    locate: <MuiIcons.LocationSearching fontSize="small" />,
    remove: <MuiIcons.RemoveShoppingCart fontSize="small" />,
  }[bookAction];

  const action = {
    buy: () =>
      customNavigate(isBookDetailRoute ? "buy" : `${book.id}/buy`, {
        state: { book },
      }),
    cart: () =>
      customNavigate(isBookDetailRoute ? "cart" : `${book.id}/cart`, {
        state: { book },
      }),
    change: () =>
      customNavigate(isBookDetailRoute ? "change" : `${book.id}/change`, {
        state: { book },
      }),
    delete: () =>
      customNavigate(isBookDetailRoute ? "delete" : `${book.id}/delete`, {
        state: { book },
      }),
    locate: () =>
      customNavigate(isBookDetailRoute ? "locate" : `${book.id}/locate`, {
        state: { book },
      }),
    remove: () =>
      customNavigate(isBookDetailRoute ? "remove" : `${book.id}/remove`, {
        state: { book },
      }),
  }[bookAction];

  return (
    <Mui.Button
      color="primary"
      size="small"
      variant="outlined"
      {...props}
      startIcon={isBookDetailRoute && Icon}
      onClick={action}
    >
      {bookAction}
    </Mui.Button>
  );
};

export declare namespace actionButtons {
  export type Type = Mui.ButtonProps & {
    bookAction: bookRole.Actions;
    book: Pages.Books.Views.bookCard.book;
  };
}
