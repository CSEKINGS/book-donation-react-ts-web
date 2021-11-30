import * as Faker from "faker";
import * as Api from "src/api";

export const useSignInCheck = (): profile.Type => {
  const response = Api.Server.useRequest(
    ["user", localStorage.getItem("bdtoken") || ""],
    "user"
  );
  delete response?.data?.userLog;
  return {
    user: response.data
      ? { signin: true, profile: response?.data?.photo, ...response.data }
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
