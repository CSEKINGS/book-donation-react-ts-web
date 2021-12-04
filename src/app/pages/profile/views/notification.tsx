import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";

export const Notification = ({
  bookID,
  userID,
  photo,
  name,
  message,
  time,
}: notification.Props) => {
  const { customNavigate } = Hooks.useNavigate();
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
          state: { notification: { userID, bookID, photo, name } },
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
              {message}
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Typography
            variant="caption"
            color="text.secondary"
            alignSelf="flex-end"
            noWrap
            position="absolute"
            sx={{ right: 5, bottom: 5 }}
          >
            {new Date(time).toLocaleDateString()}
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
    </Mui.Card>
  );
};
export declare namespace notification {
  export interface Props {
    bookID: string;
    userID: string;
    photo: string;
    name: string;
    message: string;
    time: string;
  }
}
