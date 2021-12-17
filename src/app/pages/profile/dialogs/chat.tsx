import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Components from "src/app/components";
import * as Router from "react-router-dom";
import * as Pages from "src/app/pages";
import * as React from "react";
import * as API from "src/api";
import * as Hooks from "src/app/hooks";

export const Chat = () => {
  const {
    state: {
      notification: { photo, name, chatId },
      book,
    },
  } = Router.useLocation();
  const { user } = Hooks.useSignInCheck();

  const [chats, setChats] = React.useState<
    Pages.Profile.Hooks.chatList.chats[]
  >([]);

  const [chatMessage, setChatMessage] = React.useState("");

  const { chatList, loading } = Pages.Profile.Hooks.useGetChatList();

  React.useEffect(() => {
    API.Socket.socket.on("message-received", (msg) => setChats([...chats, msg]));
  }, [chatMessage]);

  const handleSend = () => {
    setChatMessage("");
    API.Socket.socket.emit("message-sent", {
      chatId,
      userID: user._id,
      message: chatMessage,
      time: new Date().getTime(),
    });
  };

  React.useLayoutEffect(() => {
    setChats(chatList);
  }, [chatList]);

  React.useLayoutEffect(() => {
    document
      .getElementById("chat-list")
      ?.scrollTo({ top: 1000000, behavior: "smooth" });
  }, [document.getElementById("chat-list"), chats]);
  return (
    <Components.Dialog
      open={true}
      color="error"
      fullScreen
      profile={photo}
      back={`${name} for ${book.name} book`}
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
          {chats?.map((values, index) => (
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
