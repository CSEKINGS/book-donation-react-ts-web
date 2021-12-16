import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Hooks from "src/app/hooks";

export const Chat = ({ message, time, userID }: chat.Props) => {
  const {
    state: {
      notification: { photo },
    },
  } = Router.useLocation();
  const { user } = Hooks.useSignInCheck();
  
  return (
    <Mui.Stack
      sx={{
        bgcolor: "#ffffff",
        p: 2,
        width: "fit-content",
        maxWidth: "sm",
        borderRadius: 4,
        borderTopLeftRadius: userID !== user._id ? 0 : "auto",
        borderTopRightRadius: userID === user._id ? 0 : "auto",
      }}
      direction={userID !== user._id ? "row" : "row-reverse"}
      alignSelf={userID !== user._id ? "flex-start" : "flex-end"}
      position="relative"
    >
      <Mui.Avatar src={userID !== user._id ? photo : user?.profile} />
      <Mui.Typography variant="body1">{message}</Mui.Typography>
      <Mui.Typography
        variant="caption"
        color="text.secondary"
        noWrap
        position="absolute"
        sx={
          userID !== user._id ? { right: 3, bottom: 3 } : { left: 3, bottom: 3 }
        }
      >
        {new Date(parseInt(time as string)).toLocaleDateString()}
      </Mui.Typography>
    </Mui.Stack>
  );
};

export declare namespace chat {
  export interface Props {
    message: string;
    time: string | number;
    userID: string;
  }
}
