import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";

export const BookCard = ({
  bookInfo: { _id, photo, name, description, uploadDate },
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
          customNavigate(`/books/${_id}`, { state: { role } });
        }}
      >
        <Mui.CardContent>
          <Mui.Typography variant="body1" color="primary" align="center" noWrap>
            {name}
          </Mui.Typography>
          <Mui.CardMedia component="img" image={photo} sx={{ height: 100 }} />
          <Mui.Typography
            variant="caption"
            color="text.secondary"
            textAlign="right"
            display="flow-root list-item"
          >
            {new Date(uploadDate).toLocaleDateString()}
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
    _id?: string;
    name: string;
    description: string;
    photo: string;
    uploadDate: string;
    author: string;
    categeory: string;
    location: number[];
    userID?: string;
    wishedUsers?: string[];
    receiverID?: { userID: string; message: string; time: string }[];
  }
}
