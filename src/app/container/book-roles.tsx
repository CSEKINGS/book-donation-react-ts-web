import * as Mui from "@mui/material";
import * as Container from "src/app/container";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";

export const BookRole = ({
  role,
  book,
}: bookRole.Props & { book: Pages.Books.Views.bookCard.book }) => {
  const { pathname } = Router.useLocation();
  const isBookDetailRoute = Router.matchPath(
    {
      path: "/books/:bookId",
      caseSensitive: true,
      end: false,
    },
    pathname
  );

  // const valuetext = (value: number) => {
  //   return value === 0 ? "Change" : value === 100 ? "Remove" : "Change|Remove";
  // };

  return isBookDetailRoute ? (
    <Mui.Stack
      direction="row"
      position="fixed"
      sx={{
        left: 0,
        bottom: isBookDetailRoute ? 0 : 10,
        p: isBookDetailRoute ? 1.5 : 0,
        justifyContent: isBookDetailRoute ? "flex-end" : "space-around",
        zIndex: (theme) => theme.zIndex.appBar + 1,
        width: "100%",
        bgcolor: "#ffffff",
      }}
    >
      {
        {
          books: (
            <>
              <Container.ActionButtons book={book} bookAction="locate" />
              <Container.ActionButtons book={book} bookAction="buy" />
              <Container.ActionButtons book={book} bookAction="cart" />
            </>
          ),
          related: (
            <>
              <Container.ActionButtons book={book} bookAction="locate" />
              <Container.ActionButtons book={book} bookAction="buy" />
              <Container.ActionButtons book={book} bookAction="cart" />
            </>
          ),
          mine: (
            <>
              <Container.ActionButtons book={book} bookAction="change" />
              {/* {!isBookDetailRoute && (
                <Mui.Slider
                  defaultValue={50}
                  valueLabelDisplay="auto"
                  valueLabelFormat={valuetext}
                  track={false}
                />
              )} */}
              <Container.ActionButtons
                book={book}
                bookAction="delete"
                color="error"
              />
            </>
          ),
          cart: (
            <>
              <Container.ActionButtons book={book} bookAction="locate" />
              <Container.ActionButtons book={book} bookAction="buy" />
              <Container.ActionButtons
                book={book}
                color="error"
                bookAction="remove"
              />
            </>
          ),
        }[role]
      }
    </Mui.Stack>
  ) : null;
};
