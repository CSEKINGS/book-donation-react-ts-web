import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";

export const BookCard = ({
  bookInfo: { id, image, title, description, time },
  role,
}: bookCard.Props) => {
  const { customNavigate } = Hooks.useNavigate();
  return (
    <Mui.Card
      sx={{
        width: 150,
        height: 220,
        alignSelf: "center",
      }}
    >
      <Mui.CardActionArea
        onClick={() => {
          customNavigate(`/books/${id}`, { state: { role } });
        }}
      >
        <Mui.CardContent>
          <Mui.Typography variant="body1" color="primary" align="center" noWrap>
            {title}
          </Mui.Typography>
          <Mui.CardMedia component="img" image={image} />
          <Mui.Typography
            variant="caption"
            color="text.secondary"
            textAlign="right"
            display="flow-root list-item"
          >
            {time}
          </Mui.Typography>
          <Mui.Typography
            variant="subtitle1"
            align="center"
            sx={{ height: 50, overflow: "hidden" }}
          >
            {description}
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
    </Mui.Card>
  );
};

export declare namespace bookCard {
  export interface Props {
    bookInfo: bookCard.book;
    role: bookRole.Roles;
  }
  export interface book {
    id: string;
    title: string;
    description: string;
    image: string;
    time: string;
    author: string;
    categeory: string;
    location?: boolean;
  }
}
