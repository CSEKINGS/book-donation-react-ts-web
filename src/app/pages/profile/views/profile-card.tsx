import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Pages from "src/app/pages";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const ProfileCard = ({
  title,
  books,
  path,
  role,
  onClick,
  notifications,
}: profileCard.Props) => (
  <Mui.Stack
    spacing={0}
    justifyContent="space-between"
    component={Mui.Paper}
    sx={{
      // bgcolor: (theme) => theme.palette.primary.light,
      // color: "#fff",
      mt: 2,
      p: 2,
    }}
  >
    <Mui.Stack direction="row" justifyContent="space-between">
      <Mui.Typography color="primary" variant="h6">
        {title}
      </Mui.Typography>
      {onClick && (
        <Mui.Button
          size="small"
          endIcon={<MuiIcons.ArrowForward />}
          onClick={onClick}
          sx={{ textTransform: "initial" }}
        >
          See all
        </Mui.Button>
      )}
      {path && (
        <Mui.Button
          size="small"
          endIcon={<MuiIcons.ArrowForward />}
          component={Router.Link}
          to={`../${path}`}
          sx={{ textTransform: "initial" }}
        >
          See all
        </Mui.Button>
      )}
    </Mui.Stack>
    <Mui.Grid
      container
      justifyContent="center"
      sx={{ p: 1, maxHeight: 600, overflow: "auto", mt: 1 }}
    >
      {role &&
        ((!books?.length && <Components.NothigToShow />) ||
          books?.map((book, index) => (
            <Mui.Grid item xs key={index}>
              <Pages.Books.Views.BookCard bookInfo={book} role={role} />
            </Mui.Grid>
          )))}
      {!role && notifications && !Object.values(notifications)?.length && (
        <Components.NothigToShow />
      )}
      {notifications &&
        Object.values(notifications).map((notification, index) => (
          <Mui.Grid item xs={12} key={index}>
            <Pages.Profile.Views.Notification
              user={notification.user}
              message={notification.message}
            />
          </Mui.Grid>
        ))}
    </Mui.Grid>
  </Mui.Stack>
);

export declare namespace profileCard {
  export interface Props {
    title: string;
    books?: Pages.Books.Views.bookCard.book[];
    path?: string;
    role?: bookRole.Roles;
    notifications?: { [key: string]: Pages.Profile.Views.notification.Props };
    onClick?: () => void;
  }
}
