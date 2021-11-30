declare namespace bookRole {
  export interface Props {
    role: bookRole.Roles;
  }
  export type Roles = "books" | "mine" | "cart" | "related";
  export type Actions =
    | "change"
    | "delete"
    | "cart"
    | "remove"
    | "locate"
    | "buy";
}
