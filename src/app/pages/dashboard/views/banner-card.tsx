import * as Mui from "@mui/material";
import React from "react";

export const BannerCard = ({ title, content, image }: bannerCard.Props) => (
  <Mui.Card>
    <Mui.CardActionArea>
      <Mui.CardContent
        component={Mui.Stack}
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Mui.CardMedia component="img" image={image} />
        <Mui.Divider
          orientation="vertical"
          variant="middle"
          flexItem
          color="primary"
          sx={{
            border: (theme) => `2px solid ${theme.palette.primary.main}`,
            height: 50,
            alignSelf: "center",
          }}
        />
        <Mui.Stack>
          <Mui.Typography variant="h6" fontWeight="bold">
            {title}
          </Mui.Typography>
          <Mui.Typography paragraph color="text.secondary">
            {content}
          </Mui.Typography>
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
