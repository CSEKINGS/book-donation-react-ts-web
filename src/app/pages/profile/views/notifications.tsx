import * as Pages from "src/app/pages";

export const Notifications = () => {
  const notifications = Pages.Profile.Hooks.useGetNotifications();
  return (
    <Pages.Profile.Views.ProfileCard
      title="My Notifications"
      notifications={notifications}
    />
  );
};
