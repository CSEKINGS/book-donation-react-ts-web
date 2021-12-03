import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";
import * as Api from "src/api";
import * as React from "react";

export const Remove = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const [loading, setLoading] = React.useState(false);

  const {
    state: {
      book: { _id, name, photo },
    },
  } = Router.useLocation();

  const handleRemove = () => {
    setLoading(true);
    Api.Server.Request("cartRemove", { bookId: _id })
      .then((res) => {
        enqueueSnackbar(`${name} book removed from Cart!`, {
          variant: "success",
        });
        customNavigate(-2);
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar(`Error: ${err.response.data.message}`, {
          variant: "error",
        });
        setLoading(false);
      });
  };

  return (
    <Components.Dialog
      open={true}
      title="remove from Cart"
      onConfirm={handleRemove}
      fullScreen={false}
      color="error"
      loading={loading}
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
            Are you sure, Do you want to Remove this <b>{name}</b> in Your Cart
            ?
          </Mui.Typography>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
