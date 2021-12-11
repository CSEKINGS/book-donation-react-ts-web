import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";
import * as React from "react";

export const useGetNotifications = (): Notifications.Type => {
  const { user } = Hooks.useSignInCheck();
  const { data, isFetching } = Api.Server.useRequest(
    ["notifications", user?._id as string],
    "notification"
  );
  return { notifications: data, loading: isFetching };
};

export declare namespace Notifications {
  export type Type = {
    notifications: Pages.Profile.Views.notification.Props[];
    loading: boolean;
  };
}

// return new Array(8).fill(undefined).map(() => ({
//   uid: Faker.lorem.word(),
//   profile: Faker.image.animals(),
//   name: Faker.name.findName(),
//   message: Faker.lorem.sentence(),
//   time: new Date(Faker.date.past()).toLocaleDateString(),
// }));
