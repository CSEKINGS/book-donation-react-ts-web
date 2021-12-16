import * as Routes from "src/app/routes";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";
import * as Socket from "src/api/socket";
import React from "react";

export const SocketInit = () => {
  const { notifications } = Pages.Profile.Hooks.useGetNotifications();
  React.useEffect(() => {
    notifications &&
      Object.values(notifications)?.forEach((notification) =>
        Socket.socket.emit("online", notification.message.chatId)
      );
  }, [notifications]);
  return <Routes.Main />;
};

export const Main = () => (
  <Components.AppProvider>
    <SocketInit />
  </Components.AppProvider>
);
