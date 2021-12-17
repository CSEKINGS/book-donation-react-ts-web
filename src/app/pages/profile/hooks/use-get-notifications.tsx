import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";
import * as Socket from "src/socket";
import * as React from "react";

export const useGetNotifications = (): Notifications.Type => {
  const { user } = Hooks.useSignInCheck();
  const [notification, setNotifications] = React.useState("");
  Socket.socket.on("notifications", (msg) => {
    console.log(msg);
    setNotifications(msg);
  });
  const { data, isFetching } = Api.Server.useRequest(
    ["notifications", user?._id as string, notification],
    "notification"
  );
  console.log(notification);
  return { notifications: data, loading: isFetching };
};

export declare namespace Notifications {
  export type Type = {
    notifications: { [key: string]: Pages.Profile.Views.notification.Props };
    loading: boolean;
  };
}
