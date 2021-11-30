import * as Mui from "@mui/material";
import * as Components from "src/app/components";
import * as Router from "react-router-dom";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";

export const Delete = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const {
    state: {
      user: { profile, name },
    },
  } = Router.useLocation();

  const handleDelete = () => {
    Api.Server.Request("userDelete")
      .then((res) => {
        localStorage.setItem("bdtoken", "");
        enqueueSnackbar("Your account deleted successfully!", {
          variant: "success",
        });
        customNavigate("/");
      })
      .catch((err) =>
        enqueueSnackbar(`Error: ${err.message}`, {
          variant: "error",
        })
      );
  };

  return (
    <Components.Dialog
      open={true}
      title="delete your book"
      onConfirm={handleDelete}
      fullScreen={false}
      color="error"
    >
      <Mui.DialogContent>
        <Mui.Stack alignItems="center">
          <Mui.Avatar src={profile} sx={{ height: 70, width: 70 }} />
          <Mui.Typography variant="h6" textAlign="center">
            {name}
          </Mui.Typography>
          <Mui.Typography
            variant="body1"
            textAlign="center"
            sx={{
              bgcolor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.error.main,
              p: 5,
            }}
          >
            Are you sure, Do you want to permenently delete your account?
          </Mui.Typography>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
