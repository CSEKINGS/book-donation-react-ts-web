import * as Mui from "@mui/material";

export const Chat = ({ profile, message, time, align }: chat.Props) => (
  <Mui.Stack
    sx={{ bgcolor: "#ffffff", p: 2, width: "fit-content", maxWidth: "sm" }}
    direction={align ? "row" : "row-reverse"}
    alignSelf={align ? "flex-start" : "flex-end"}
    position="relative"
  >
    <Mui.Avatar src={profile} />
    <Mui.Typography variant="body1">{message}</Mui.Typography>
    <Mui.Typography
      variant="caption"
      color="text.secondary"
      noWrap
      position="absolute"
      sx={align ? { right: 3, bottom: 3 } : { left: 3, bottom: 3 }}
    >
      {time}
    </Mui.Typography>
  </Mui.Stack>
);

export declare namespace chat {
  export interface Props {
    profile?: string;
    message: string;
    time: string;
    align?: boolean;
  }
}
