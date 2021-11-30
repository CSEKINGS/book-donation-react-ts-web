import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";

export const Content = () => {
  const chart = Hooks.useGetChart();
  const books = Hooks.useGetBooks();
  const bannerDetails = Pages.Dashboard.Hooks.useGetDashboard();
  return (
    <Mui.Grid container justifyContent="center" alignItems="center">
      {bannerDetails.map((banner, index) => (
        <Mui.Grid item xs={12} sm={6} md={4} key={index} alignItems="center">
          <Pages.Dashboard.Views.BannerCard {...banner} />
        </Mui.Grid>
      ))}
      <Pages.Books.Views.BookList
        chart={chart}
        title="All Books"
        books={books}
        role="books"
      />
    </Mui.Grid>
  );
};
