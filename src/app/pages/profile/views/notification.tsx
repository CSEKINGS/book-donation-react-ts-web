import * as Mui from "@mui/material";
import * as Hooks from "src/app/hooks";

export const Notification = ({
  uid,
  profile,
  name,
  message,
  time,
}: notification.Props) => {
  const { customNavigate } = Hooks.useNavigate();
  return (
    <Mui.Card
      sx={{
        width: "90%",
        maxWidth: "sm",
        minHeight: "fit-content",
        overflow: "hidden",
      }}
      onClick={() =>
        customNavigate("chat", {
          state: { notification: { uid, profile, name } },
        })
      }
    >
      <Mui.CardActionArea>
        <Mui.CardContent
          component={Mui.Stack}
          direction="row"
          position="relative"
        >
          <Mui.Avatar
            sx={{ height: { xs: 50, md: 60 }, width: { xs: 50, md: 60 } }}
            src={profile}
          />
          <Mui.Stack sx={{ width: "70%" }}>
            <Mui.Typography variant="h5" textAlign="initial" noWrap>
              {name}
            </Mui.Typography>
            <Mui.Typography variant="body1" textAlign="initial" noWrap>
              {message}
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Typography
            variant="caption"
            color="text.secondary"
            alignSelf="flex-end"
            noWrap
            position="absolute"
            sx={{ right: 5, bottom: 5 }}
          >
            {time}
          </Mui.Typography>
        </Mui.CardContent>
      </Mui.CardActionArea>
    </Mui.Card>
  );
};
export declare namespace notification {
  export interface Props {
    uid: string;
    profile: string;
    name: string;
    message: string;
    time: string;
  }
}