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
      book: { title, image },
    },
  } = Router.useLocation();

  const handleCart = () => {
    enqueueSnackbar(`${title} book added in your Cart!`, {
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
            src={image}
            sx={{ height: { xs: 200, md: 150 }, width: "100%" }}
          />
          <Mui.Typography variant="h6">{title}</Mui.Typography>
          <Mui.Typography
            variant="body1"
            textAlign="center"
            sx={{ bgcolor: (theme) => theme.palette.secondary.main, p: 5 }}
          >
            Are you sure, Do you want to Add this <b>{title}</b> in Cart ?
          </Mui.Typography>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
