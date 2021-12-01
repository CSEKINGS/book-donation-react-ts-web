import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";

export const Dialog = ({
  children,
  title,
  onConfirm,
  color,
  back,
  profile,
  ...props
}: CusDialogProps.Props) => {
  const isMobile = Mui.useMediaQuery(Mui.useTheme().breakpoints.down("md"));
  const { customNavigate } = Hooks.useNavigate();
  const onClose = () => customNavigate(-1);
  return (
    <Mui.Dialog
      fullScreen={isMobile}
      {...props}
      open={true}
      PaperProps={{
        style: { boxShadow: "none", minWidth: !isMobile ? 400 : "auto" },
      }}
      onClose={onClose}
      maxWidth="sm"
    >
      <Mui.DialogTitle>
        <Mui.Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {title && (
            <Mui.Typography variant="h5" sx={{ textTransform: "capitalize" }}>
              {title}
            </Mui.Typography>
          )}
          {!onConfirm ? (
            <Mui.Button
              startIcon={<MuiIcons.ArrowBack />}
              color="primary"
              onClick={onClose}
            >
              {profile && <Mui.Avatar src={profile} sx={{ m: 1 }} />}
              {back || "Back"}
            </Mui.Button>
          ) : null}
        </Mui.Stack>
      </Mui.DialogTitle>
      {children}
      {onConfirm && (
        <Mui.DialogActions>
          <Mui.Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            <Mui.Button
              variant="contained"
              fullWidth
              sx={{ m: 2 }}
              onClick={onConfirm}
              color={color}
            >
              Confirm
            </Mui.Button>
            <Mui.Button
              variant="contained"
              fullWidth
              sx={{ m: "16px !important" }}
              onClick={onClose}
            >
              Cancel
            </Mui.Button>
          </Mui.Stack>
        </Mui.DialogActions>
      )}
    </Mui.Dialog>
  );
};

export declare namespace CusDialogProps {
  export type Props = Mui.DialogProps &
    Pick<Mui.ButtonProps, "color"> & {
      title?: string;
      back?: string;
      profile?: string;
      onConfirm?: () => void;
    };
}
