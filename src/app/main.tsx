import * as Routes from "src/app/routes";
import * as Components from "src/app/components";
import * as Pages from "src/app/pages";
import * as Socket from "src/api/socket";
import * as Hooks from "src/app/hooks";
import React from "react";

export const SocketInit = () => {
  const { notifications } = Pages.Profile.Hooks.useGetNotifications();
  const { user } = Hooks.useSignInCheck();
  React.useEffect(() => {
    notifications?.map(({ bookID, userID }) =>
      Socket.socket.emit("join", user._id + bookID + userID)
    );
  }, [notifications]);
  return <Routes.Main />;
};

export const Main = () => (
  <Components.AppProvider>
    <SocketInit />
  </Components.AppProvider>
);
