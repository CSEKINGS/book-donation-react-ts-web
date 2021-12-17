import * as Router from "react-router-dom";
import * as Api from "src/api";
import * as Hooks from "src/app/hooks";
import * as Socket from "src/socket";
import * as React from "react";
import * as Assets from "src/assets";

export const useGetChatList = (): chatList.Props => {
  const audio = new Audio(Assets.sound.Fruit);
  const {
    state: {
      notification: { chatId },
    },
  } = Router.useLocation();
  const { user } = Hooks.useSignInCheck();
  const [Msg, setMsg] = React.useState({ message: "", time: "", userID: "" });

  Socket.socket.on("message-received", (msg) => setMsg(msg));

  React.useEffect(() => {
    Msg.userID !== user._id && Msg.message.length && audio.play();
  }, [Msg.message]);

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
