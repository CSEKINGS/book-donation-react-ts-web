import * as Mui from "@mui/material";
import React from "react";

export const BookCard = ({
  title,
  description,
  image,
  time,
}: bookCard.Props) => (
  <Mui.Card
    sx={{
      width: 150,
      height: 200,
    }}
  >
    <Mui.CardActionArea>
      <Mui.CardContent component={Mui.Stack} spacing={1}>
        <Mui.CardMedia component="img" image={image} />
        <Mui.Box>
          <Mui.Stack direction="row" justifyContent="space-between">
            <Mui.Typography variant="body1" color="primary">
              {title}
            </Mui.Typography>
            <Mui.Typography
              variant="caption"
              color="text.secondary"
              textAlign="right"
            >
              {time}
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Typography variant="subtitle1">{description}</Mui.Typography>
        </Mui.Box>
      </Mui.CardContent>
    </Mui.CardActionArea>
  </Mui.Card>
);

export declare namespace bookCard {
  export interface Props {
    title: string;
    description: React.ReactNode;
    image: string;
    time: string;
  }
}
