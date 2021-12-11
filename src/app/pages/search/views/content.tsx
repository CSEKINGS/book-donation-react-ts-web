import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as React from "react";

export const Content = () => {
  const {
    state: { author, categeory, role },
  } = Router.useLocation();
  const { books, loading } = Hooks.useGetBooks(role || "books");
  const [search] = Router.useSearchParams();
  const [authorVal, setAuthor] = React.useState(author || "");
  const [categeoryVal, setCategeory] = React.useState(categeory || "");
  const authorIndex = books
    ?.map((book, index) => {
      if (book.author === author) return index;
    })
    .filter((val) => val !== undefined)[0];
  const categeoryIndex = books
    ?.map((book, index) => {
      if (book.categeory === categeory) return index;
    })
    .filter((val) => val !== undefined)[0];

  return (
    <Mui.Grid container>
      <Mui.Grid item xs={12} md={6}>
        {search.get("q") && (
          <Mui.Typography variant="h5" noWrap>
            Search result for... {search.get("q")}
          </Mui.Typography>
        )}
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Mui.Stack direction="row">
          <Components.SelectField
            label="Author"
            value={authorIndex}
            onChange={(e: Mui.SelectChangeEvent<unknown>) =>
              setAuthor(books[e.target.value as number].author)
            }
          >
            {books?.map((book, index) => (
              <Mui.MenuItem value={index}>{book.author}</Mui.MenuItem>
            ))}
          </Components.SelectField>
          <Components.SelectField
            label="Categeory"
            value={categeoryIndex}
            onChange={(e: Mui.SelectChangeEvent<unknown>) =>
              setCategeory(books[e.target.value as number].categeory)
            }
          >
            {books?.map((book, index) => (
              <Mui.MenuItem value={index}>{book.categeory}</Mui.MenuItem>
            ))}
          </Components.SelectField>
        </Mui.Stack>
      </Mui.Grid>
      {books
        ?.filter(
          (book) =>
            book.name
              .toLowerCase()
              .includes(search.get("q")?.toLowerCase() || "") &&
            book.author.toLowerCase().includes(authorVal.toLowerCase()) &&
            book.categeory.toLowerCase().includes(categeoryVal.toLowerCase())
        )
        ?.map((book, index) => (
          <Mui.Grid item xs key={index}>
            <Pages.Books.Views.BookCard bookInfo={book} role="books" />
          </Mui.Grid>
        ))}
    </Mui.Grid>
  );
};
