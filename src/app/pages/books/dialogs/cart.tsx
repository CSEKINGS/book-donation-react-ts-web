import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Notistack from "notistack";
import * as Hooks from "src/app/hooks";

export const Cart = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();

  const {
    state: {
      book: { _id, name, photo },
    },
  } = Router.useLocation();

  const handleCart = () => {
    enqueueSnackbar(`${name} book added in your Cart!`, {
      variant: "success",
    });
    customNavigate(-1);
  };
  return (
    <Components.Dialog
      open={true}
      title="Add to Cart"
      onConfirm={handleCart}
      fullScreen={false}
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
            sx={{ bgcolor: (theme) => theme.palette.secondary.main, p: 5 }}
          >
            Are you sure, Do you want to Add this <b>{name}</b> in Cart ?
          </Mui.Typography>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
