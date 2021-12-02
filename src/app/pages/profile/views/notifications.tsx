import * as Pages from "src/app/pages";

export const Notifications = () => {
  const { notifications, loading } = Pages.Profile.Hooks.useGetNotifications();
  return (
    <Pages.Profile.Views.ProfileCard
      title="My Notifications"
      notifications={notifications}
    />
  );
};
