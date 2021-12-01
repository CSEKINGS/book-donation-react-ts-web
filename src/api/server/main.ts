import * as Axios from "axios";
import * as Constants from "src/constants";
import * as Requests from "./request-routes";
import * as ReactQuery from "react-query";

const client = Axios.default.create({
  baseURL: Constants.API_CONFIG.baseURL,
});

export const Request = (options: string, data?: any) =>
  client({
    ...Requests.Routes[options],
    headers: {
      Authorization: `Bearer ${
        options === "token"
          ? localStorage.getItem("refreshToken")
          : localStorage.getItem("bdtoken")
      }`,
    },
    data,
  }).then((res) => res.data);

export const useRequest = (
  queryOptions: string[],
  options: string,
  data?: any
) => {
  return ReactQuery.useQuery(queryOptions, () => Request(options, data));
};
