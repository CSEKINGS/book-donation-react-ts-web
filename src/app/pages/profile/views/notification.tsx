import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";

export const Notification = ({
  user: { photo, name },
  message: { message, time, ...IDS },
}: notification.Props) => {
  const { customNavigate } = Hooks.useNavigate();
  const { user } = Hooks.useSignInCheck();
  const { book } = Hooks.useGetBooksByID(IDS.bookID);
  return (
    <Mui.Card
      sx={{
        width: "90%",
        maxWidth: "sm",
        minHeight: "fit-content",
        overflow: "hidden",
      }}
      onClick={() =>
        customNavigate("chat", {
          state: {
            notification: {
              ...IDS,
              photo,
              name,
            },
            book,
          },
        })
      }
    >
      <Mui.CardActionArea>
        <Mui.CardContent
          component={Mui.Stack}
          direction="row"
          position="relative"
        >
          <Mui.Avatar
            sx={{ height: { xs: 50, md: 60 }, width: { xs: 50, md: 60 } }}
            src={photo}
          />
          <Mui.Stack sx={{ width: "70%" }}>
            <Mui.Typography variant="h5" textAlign="initial" noWrap>
              {name}
            </Mui.Typography>
            <Mui.Typography variant="body1" textAlign="initial" noWrap>
              {IDS.userID === user._id ? `You: ${message}` : message}
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Typography variant="caption" textAlign="initial" noWrap>
            {book?.name} book
          </Mui.Typography>
          <Mui.Typography
            variant="caption"
            color="text.secondary"
            alignSelf="flex-end"
            noWrap
            position="absolute"
            sx={{ right: 5, bottom: 5 }}
          >
            {new Date(parseInt(time)).toLocaleDateString()}
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
    </Mui.Card>
  );
};
export declare namespace notification {
  export interface Props {
    message: {
      bookID: string;
      userID: string;
      chatId: string;
      message: string;
      time: string;
    };
    user: {
      photo: string;
      name: string;
    };
  }
}
