import * as Pages from "src/app/pages";
import * as Faker from "faker";

export const useGetChatList = (uid: string): chatList.Type => {
  return new Array(20).fill(undefined).map((val, index) => ({
    uid: Faker.lorem.word(),
    profile: Faker.image.animals(),
    name: Faker.name.findName(),
    time: new Date(Faker.date.past()).toLocaleDateString(),
    message: Faker.lorem.sentence(),
    align: index % 2 ? true : false,
  }));
};

export declare namespace chatList {
  export type Type = (Pages.Profile.Views.notification.Props & {
    align: boolean;
  })[];
}
