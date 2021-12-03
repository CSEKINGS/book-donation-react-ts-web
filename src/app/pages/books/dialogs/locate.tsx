import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";

export const Locate = () => {
  const {
    state: {
      book: { name, photo, location },
    },
  } = Router.useLocation();
  return (
    <Components.Dialog open={true} title="locate" onConfirm={() => {}}>
      <Mui.DialogContent>
        <Mui.Stack alignItems="center">
          <Mui.Avatar
            variant="square"
            src={photo}
            sx={{ height: { xs: 200, md: 150 }, width: "100%" }}
          />
          <Mui.Typography variant="h6">{name}</Mui.Typography>
          <Mui.Typography variant="h6">
            Geo Location : {location.join(", ")}
          </Mui.Typography>
        </Mui.Stack>
      </Mui.DialogContent>
    </Components.Dialog>
  );
};
