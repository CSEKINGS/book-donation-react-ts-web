import * as Mui from "@mui/material";

export const SelectField = ({ label, ...props }: Mui.SelectProps) => (
  <Mui.FormControl size="small" fullWidth>
    <Mui.InputLabel id="demo-simple-select-label">{label}</Mui.InputLabel>
    <Mui.Select
      size="small"
      fullWidth
      defaultValue=""
      //   multiple
      sx={{
        maxWidth: "xs",
        "& .MuiSelect-select": {
          zIndex: 1,
        },
      }}
      MenuProps={{ style: { height: 400, overflow: "auto" } }}
      {...props}
    />
  </Mui.FormControl>
);
