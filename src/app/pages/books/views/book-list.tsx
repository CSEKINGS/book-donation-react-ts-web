import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Chart from "react-chartjs-2";
import * as Constants from "src/constants";
import * as ChartType from "chart.js";

export const BookList = ({ title, books, chart, role }: bookList.Props) => (
  <>
    <Mui.Grid item xs={12}>
      <Mui.Divider variant={"middle"}>
        <Mui.Typography color="primary" fontWeight="bold">
          {title}
        </Mui.Typography>
      </Mui.Divider>
    </Mui.Grid>
    {chart && (
      <Mui.Grid
        xs={12}
        md={4}
        component={Mui.Stack}
        position="relative"
        alignItems="center"
        justifyContent="center"
      >
        <Chart.Doughnut data={chart} options={Constants.ChartOptions} />
        <Mui.Typography
          variant="h5"
          color="primary"
          position="absolute"
          align="center"
          sx={{ width: "30%" }}
        >
          Available Data
        </Mui.Typography>
      </Mui.Grid>
    )}
    {books?.map((book, index) => (
      <Mui.Grid item xs key={index}>
        <Pages.Books.Views.BookCard bookInfo={book} role={role} />
      </Mui.Grid>
    ))}
  </>
);

export declare namespace bookList {
  export interface Props {
    title: string;
    books: Pages.Books.Views.bookCard.book[];
    chart?: ChartType.ChartData<"doughnut", number[], unknown>;
    role: bookRole.Roles;
  }
}
