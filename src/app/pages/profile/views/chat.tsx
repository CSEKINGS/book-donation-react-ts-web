import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as React from "react";
import * as Hooks from "src/app/hooks";

export const Chat = ({ message, time, type }: chat.Props) => {
  const {
    state: {
      notification: { userID, photo },
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
        borderTopLeftRadius: type === "receiver" ? 0 : "auto",
        borderTopRightRadius: type === "sender" ? 0 : "auto",
      }}
      direction={type === "receiver" ? "row" : "row-reverse"}
      alignSelf={type === "receiver" ? "flex-start" : "flex-end"}
      position="relative"
    >
      <Mui.Avatar src={type === "receiver" ? photo : user?.profile} />
      <Mui.Typography variant="body1">{message}</Mui.Typography>
      <Mui.Typography
        variant="caption"
        color="text.secondary"
        noWrap
        position="absolute"
        sx={
          type === "receiver" ? { right: 3, bottom: 3 } : { left: 3, bottom: 3 }
        }
      >
        {time}
      </Mui.Typography>
    </Mui.Stack>
  );
};

export declare namespace chat {
  export interface Props {
    message: string;
    time: string;
    type: "sender" | "receiver";
  }
}
