import * as Hooks from "src/app/hooks";
import * as Router from "react-router-dom";
import * as Faker from "faker";

export const useGetChatList = (): chatList.Props => {
  const {
    state: {
      notification: { userID },
    },
  } = Router.useLocation();
  const { user } = Hooks.useSignInCheck();
  return new Array(20).fill(undefined).map((val, index) => ({
    time: new Date(Faker.date.past()).toLocaleDateString(),
    message: Faker.lorem.sentence(),
    type: index % 2 ? "sender" : "receiver",
  }));
};

export declare namespace chatList {
  export type Props = chatList.chats[];
  export interface chats {
    time: string;
    message: string;
    type: "sender" | "receiver";
  }
}
