import * as Hooks from "src/app/hooks";
import * as Router from "react-router-dom";
import * as React from "react";
import * as Faker from "faker";

export const useGetChatList = (): chatList.Type => {
  const {
    state: {
      notification: { userID },
    },
  } = Router.useLocation();
  const {
    user: { _id },
  } = React.useContext(Hooks.Search);
  console.log(userID, _id);
  return new Array(20).fill(undefined).map((val, index) => ({
    time: new Date(Faker.date.past()).toLocaleDateString(),
    message: Faker.lorem.sentence(),
    type: index % 2 ? "sender" : "receiver",
  }));
};

export declare namespace chatList {
  export type Type = {
    time: string;
    message: string;
    type: "sender" | "receiver";
  }[];
}
