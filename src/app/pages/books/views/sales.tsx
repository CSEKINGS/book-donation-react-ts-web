import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as Hooks from "src/app/hooks";
import * as Components from "src/app/components";

export const Sales = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { books, loading } = Hooks.useGetBooks("mine");
  return (
    <>
      <Mui.Grid container>
        <Mui.Grid
          item
          xs={12}
          component={Mui.Stack}
          direction="row"
          justifyContent="space-between"
        >
          <Mui.Typography variant="h5" noWrap>
            My Books
          </Mui.Typography>
          <Mui.Button
            variant="contained"
            startIcon={<MuiIcons.Add />}
            onClick={() => customNavigate("create")}
          >
            Create
          </Mui.Button>
        </Mui.Grid>
        {!books?.length && <Components.NothigToShow />}
        {books?.map((book, index) => (
          <Mui.Grid item xs key={index}>
            <Pages.Books.Views.BookCard bookInfo={book} role="mine" />
          </Mui.Grid>
        ))}
      </Mui.Grid>
      <Router.Outlet />
    </>
  );
};
