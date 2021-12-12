import * as Router from "react-router-dom";

export const useNavigate = () => {
  const navigate = Router.useNavigate();

  const { state } = Router.useLocation();

  const customNavigate: UseNavigate.CustomNavigate = (to, options) =>
    navigate(to, {
      state: {
        ...state,
        ...options?.state,
      },
    });
  return { customNavigate };
};

export declare namespace UseNavigate {
  export type CustomNavigate = (
    to: Pick<Router.NavigateProps, "to"> | any,
    options?: Pick<Router.NavigateProps, "replace" | "state">
  ) => void;
}
