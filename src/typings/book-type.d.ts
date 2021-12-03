declare namespace bookRole {
  export interface Props {
    role: bookRole.Roles;
  }
  export type Roles = "books" | "mine" | "cart" | "related" | "buy";
  export type Actions =
    | "change"
    | "delete"
    | "message"
    | "cancel"
    | "cart"
    | "remove"
    | "locate"
    | "buy";
}
