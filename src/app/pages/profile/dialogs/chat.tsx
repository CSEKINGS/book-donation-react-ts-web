import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as React from "react";

export const Chat = () => {
  const {
    state: {
      notification: { photo, name },
    },
  } = Router.useLocation();
  const [chatMessage, setChatMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const chatList = Pages.Profile.Hooks.useGetChatList();

  const handleSend = () => {
    console.log(chatMessage);
  };

  React.useLayoutEffect(() => {
    document
      .getElementById("chat-list")
      ?.scrollTo({ top: 1000000, behavior: "smooth" });
  }, [document.getElementById("chat-list"), chatList]);

  return (
    <Components.Dialog
      open={true}
      color="error"
      fullScreen
      profile={photo}
      back={name}
      loading={loading}
    >
      <Mui.DialogContent>
        <Mui.Stack
          id="chat-list"
          alignItems="center"
          sx={{
            bgcolor: (theme) => theme.palette.secondary.main,
            p: 1,
            height: "90%",
            overflowY: "auto",
          }}
        >
          {chatList.map((values, index) => (
            <Pages.Profile.Views.Chat {...values} key={index} />
          ))}
        </Mui.Stack>
        <Mui.TextField
          fullWidth
          name="message"
          sx={{ my: 1 }}
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
          InputProps={{
            endAdornment: (
              <Mui.InputAdornment position="end">
                <Mui.IconButton onClick={handleSend}>
                  <MuiIcons.Send color="success" />
                </Mui.IconButton>
              </Mui.InputAdornment>
            ),
          }}
        />
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
