import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Assets from "src/assets";

export const Content = () => (
  <Mui.Grid container spacing={3} justifyContent="center" alignItems="center">
    {new Array(3).fill(undefined).map((val, index) => (
      <Mui.Grid item xs={12} sm={6} md={4} key={index} alignItems="center">
        <Pages.Dashboard.Views.BannerCard
          image={Assets.landingImages.AccountBanner}
          title="Content title"
          content={
            <>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</>
          }
        />
      </Mui.Grid>
    ))}
    {/* <Mui.Grid item xs={12}>
      <Mui.Divider variant="middle">
        <Mui.Chip label="Books Info" color="primary" />
      </Mui.Divider>
    </Mui.Grid> */}
    <Mui.Grid item xs={12} md={4}></Mui.Grid>
    <Mui.Grid
      item
      container
      xs={12}
      md={8}
      spacing={3}
      justifyContent="center"
      alignItems="center"
    >
      {[
        new Array(10).fill(undefined).map((value, index) => (
          <Mui.Grid item xs key={index}>
            <Pages.Dashboard.Views.BookCard
              image={Assets.landingImages.AccountBanner}
              title="Book1"
              description="some text"
              time="12:00 pm"
            />
          </Mui.Grid>
        )),
      ]}
    </Mui.Grid>
  </Mui.Grid>
);
