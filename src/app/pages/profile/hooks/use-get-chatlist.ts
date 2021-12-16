import * as Router from "react-router-dom";
import * as Api from "src/api";

export const useGetChatList = (): chatList.Props => {
  const {
    state: {
      notification: { chatId },
    },
  } = Router.useLocation();
  const { data, isFetching } = Api.Server.useRequest(
    ["chats", chatId as string],
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
