import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Locate = () => {
  const {
    state: {
      book: { name, photo, location },
    },
  } = Router.useLocation();
  return (
    <Components.Dialog open={true} title="locate" fullScreen={false}>
      <Mui.DialogContent>
        <Mui.Stack alignItems="center">
          <Mui.Avatar
            variant="square"
            src={photo}
            sx={{ height: { xs: 200, md: 150 }, width: "100%" }}
          />
          <Mui.Typography variant="h6">{name}</Mui.Typography>
          <Mui.Button
            // variant="outlined"
            size="large"
            component="a"
            target="_blank"
            href={`https://maps.google.com/?q=${location.join(", ")}`}
            startIcon={<MuiIcons.LocationOn fontSize="inherit" />}
          >
            View Map
          </Mui.Button>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
