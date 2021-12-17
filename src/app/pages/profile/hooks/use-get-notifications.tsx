import * as Pages from "src/app/pages";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";

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
    notifications: { [key: string]: Pages.Profile.Views.notification.Props };
    loading: boolean;
  };
}
