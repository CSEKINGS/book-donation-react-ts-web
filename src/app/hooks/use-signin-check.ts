import * as Api from "src/api";

export const useSignInCheck = (): profile.Type => {
  const { data } = Api.Server.useRequest(
    ["user", localStorage.getItem("bdtoken") || ""],
    "user"
  );
  delete data?.userLog;
  return {
    user: data
      ? { signin: true, profile: data?.photo, ...data }
      : { signin: false },
  };
};

export declare namespace profile {
  export interface Info {
    profile: string;
    name: string;
    email: string;
    mobileNo: string;
    about: string;
    address: string;
    signin: boolean;
  }
  export type Type = { user: profile.Info };
}
