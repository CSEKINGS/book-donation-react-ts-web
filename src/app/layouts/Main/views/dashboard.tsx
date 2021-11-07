import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const Dashboard = () => (
  <>
    <Mui.Box sx={{ flexGrow: 1 }} />
    <Mui.TextField
      variant="outlined"
      placeholder="Search..."
      size="small"
      sx={{ fontSize: "small", m: 1, width: 150 }}
      InputProps={{
        startAdornment: (
          <Mui.InputAdornment position="start">
            <MuiIcons.Search color="primary" />
          </Mui.InputAdornment>
        ),
      }}
    />
  </>
);
