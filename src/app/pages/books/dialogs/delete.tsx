import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";

export const Delete = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const {
    state: {
      book: { _id, name, photo },
    },
  } = Router.useLocation();

  const handleDelete = () => {
    Api.Server.Request("bookDelete", { bookId: _id })
      .then((res) => {
        enqueueSnackbar(`Your ${name} book deleted successfully!`, {
          variant: "success",
        });
        customNavigate(-2);
      })
      .catch((err) =>
        enqueueSnackbar(`Error: ${err.response.data.message}`, {
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
      maxWidth="sm"
    >
      <Mui.DialogContent>
        <Mui.Stack alignItems="center">
          <Mui.Avatar
            variant="square"
            src={photo}
            sx={{ height: { xs: 200, md: 150 }, width: "100%" }}
          />
          <Mui.Typography variant="h6">{name}</Mui.Typography>
          <Mui.Typography
            variant="body1"
            textAlign="center"
            sx={{
              bgcolor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.error.main,
              p: 5,
            }}
          >
            Are you sure, Do you want to delete this <b>{name}</b> Book?
          </Mui.Typography>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
