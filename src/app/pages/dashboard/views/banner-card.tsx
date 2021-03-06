import * as Mui from "@mui/material";
import React from "react";

export const BannerCard = ({ title, content, image }: bannerCard.Props) => (
  <Mui.Card
    sx={{
      minWidth: 300,
      bgcolor: (theme) => theme.palette.primary.light,
      color: "#ffffff",
    }}
  >
    <Mui.CardActionArea sx={{ height: 180 }}>
      <Mui.CardContent
        component={Mui.Stack}
        direction="row"
        alignItems="center"
      >
        <Mui.CardMedia component="img" image={image} width={200} />
        <Mui.Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            border: (theme) => `2px solid #ffffff`,
            height: 50,
            alignSelf: "center",
            borderRadius: 1,
          }}
        />
        <Mui.Stack>
          <Mui.Typography variant="h6" fontWeight="bold">
            {title}
          </Mui.Typography>
          <Mui.Typography paragraph>{content}</Mui.Typography>
        </Mui.Stack>
      </Mui.CardContent>
    </Mui.CardActionArea>
  </Mui.Card>
);

export declare namespace bannerCard {
  export interface Props {
    title: string;
    content: React.ReactNode;
    image: string;
  }
}
