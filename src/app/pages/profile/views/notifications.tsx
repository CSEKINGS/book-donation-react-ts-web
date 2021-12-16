import * as Pages from "src/app/pages";
import * as Socket from "src/api/socket";

export const Notifications = () => {
  const { notifications } = Pages.Profile.Hooks.useGetNotifications();
  return (
    <Pages.Profile.Views.ProfileCard
      title="My Notifications"
      notifications={notifications}
    />
  );
};
