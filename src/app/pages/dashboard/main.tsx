import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Assets from "src/assets";

export const Main = () => (
  <Mui.Grid container spacing={3} justifyContent="center" alignItems="center">
    {[0, 1, 2].map((val, index) => (
      <Mui.Grid item xs={12} md={4} key={index}>
        <Pages.Dashboard.Views.BannerCard
          image={Assets.landingImages.AccountBanner}
          title={`Content title ${val}`}
          content={
            <>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</>
          }
        />
      </Mui.Grid>
    ))}
    <Mui.Divider
      sx={{
        m: 2,
        width: "100%",
      }}
    >
      <Mui.Chip label="info" color="primary" />
    </Mui.Divider>
  </Mui.Grid>
);
