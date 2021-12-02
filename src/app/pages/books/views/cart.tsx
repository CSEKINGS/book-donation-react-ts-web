import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as Hooks from "src/app/hooks";

export const Cart = () => {
  const { books, loading } = Hooks.useGetBooks("cart");
  return (
    <>
      <Mui.Grid container>
        <Mui.Grid item xs={12}>
          <Mui.Typography variant="h5" noWrap>
            My Cart
          </Mui.Typography>
        </Mui.Grid>
        {books?.map((book, index) => (
          <Mui.Grid item xs key={index}>
            <Pages.Books.Views.BookCard bookInfo={book} role="cart" />
          </Mui.Grid>
        ))}
      </Mui.Grid>
      <Router.Outlet />
    </>
  );
};
