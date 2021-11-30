import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";

export const Delete = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const {
    state: {
      book: { title, image },
    },
  } = Router.useLocation();

  const handleDelete = () => {
    enqueueSnackbar(`Your ${title} book deleted successfully!`, {
      variant: "success",
    });
    customNavigate(-1);
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
            src={image}
            sx={{ height: { xs: 200, md: 150 }, width: "100%" }}
          />
          <Mui.Typography variant="h6">{title}</Mui.Typography>
          <Mui.Typography
            variant="body1"
            textAlign="center"
            sx={{
              bgcolor: (theme) => theme.palette.secondary.main,
              color: (theme) => theme.palette.error.main,
              p: 5,
            }}
          >
            Are you sure, Do you want to delete this <b>{title}</b> Book?
          </Mui.Typography>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
