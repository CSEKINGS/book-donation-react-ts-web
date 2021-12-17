import * as Router from "react-router-dom";
import * as Api from "src/api";
import * as Socket from "src/socket";
import * as React from "react";
import * as Sound from "./use-sound";

export const useGetChatList = (): chatList.Props => {
  const {
    state: {
      notification: { chatId },
    },
  } = Router.useLocation();
  const [Msg, setMsg] = React.useState({ message: "", time: "", userID: "" });
  Socket.socket.on("message-received", (msg) => {
    Sound.Play();
    setMsg(msg);
  });
  const { data, isFetching } = Api.Server.useRequest(
    ["chats", chatId as string, Msg.message],
    "chat",
    { chatId }
  );
  return { chatList: data, loading: isFetching };
};

export declare namespace chatList {
  export type Props = { chatList: chatList.chats[]; loading: boolean };
  export interface chats {
    time: string | number;
    message: string;
    userID: string;
  }
}
