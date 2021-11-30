import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as React from "react";

export const Content = () => {
  const books = Hooks.useGetBooks();
  const {
    state: { author, categeory },
  } = Router.useLocation();
  const { search } = React.useContext(Pages.Search.Hooks.Search);
  const [authorVal, setAuthor] = React.useState(author || "");
  const [categeoryVal, setCategeory] = React.useState(categeory || "");

  return (
    <Mui.Grid container>
      <Mui.Grid item xs={12} md={6}>
        {search && (
          <Mui.Typography variant="h5" noWrap>
            Search result for... {search}
          </Mui.Typography>
        )}
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Mui.Stack direction="row">
          <Components.SelectField
            label="Author"
            onChange={(e: Mui.SelectChangeEvent<unknown>) =>
              setAuthor(books[e.target.value as number].author)
            }
          >
            {books.map((book, index) => (
              <Mui.MenuItem value={index}>{book.author}</Mui.MenuItem>
            ))}
          </Components.SelectField>
          <Components.SelectField
            label="Categeory"
            onChange={(e: Mui.SelectChangeEvent<unknown>) =>
              setCategeory(books[e.target.value as number].categeory)
            }
          >
            {books.map((book, index) => (
              <Mui.MenuItem value={index}>{book.categeory}</Mui.MenuItem>
            ))}
          </Components.SelectField>
        </Mui.Stack>
      </Mui.Grid>
      {books
        .filter(
          (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(authorVal.toLowerCase()) ||
            book.categeory.toLowerCase().includes(categeoryVal.toLowerCase())
        )
        .map((book, index) => (
          <Mui.Grid item xs key={index}>
            <Pages.Books.Views.BookCard bookInfo={book} role="books" />
          </Mui.Grid>
        ))}
    </Mui.Grid>
  );
};
