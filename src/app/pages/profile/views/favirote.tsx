import * as Mui from "@mui/material";

export const Favirote = () => (
  <Mui.Stack
    spacing={0}
    // alignItems="center"
    justifyContent="space-between"
    component={Mui.Paper}
    sx={{
      flexDirection: { xs: "column", md: "row" },
      // bgcolor: (theme) => theme.palette.primary.light,
      mt: 2,
      p: 2,
    }}
  >
    <Mui.Avatar variant="square" sx={{ height: 100, width: 100 }} />
    <Mui.Table>
      <Mui.TableHead>
        <Mui.TableRow>
          <Mui.TableCell colSpan={2}>
            <Mui.Typography variant="h5">Favirote</Mui.Typography>
          </Mui.TableCell>
        </Mui.TableRow>
      </Mui.TableHead>
      <Mui.TableBody>
        <Mui.TableRow>
          <Mui.TableCell>
            <Mui.Typography variant="subtitle1">Mail</Mui.Typography>
          </Mui.TableCell>
          <Mui.TableCell>
            <Mui.Typography variant="subtitle1">Joe@gmail.com</Mui.Typography>
          </Mui.TableCell>
        </Mui.TableRow>
        <Mui.TableRow>
          <Mui.TableCell>
            <Mui.Typography variant="subtitle1">Phone</Mui.Typography>
          </Mui.TableCell>
          <Mui.TableCell>
            <Mui.Typography variant="subtitle1">+91 0000000000</Mui.Typography>
          </Mui.TableCell>
        </Mui.TableRow>
      </Mui.TableBody>
    </Mui.Table>
    <Mui.Stack
      justifyContent="space-between"
      sx={{ flexDirection: { xs: "row", md: "column" }, minHeight: "100%" }}
    >
      <Mui.Button
        variant="outlined"
        sx={{ bgcolor: "#ffffff", minWidth: { md: 200 } }}
      >
        Edit
      </Mui.Button>
      <Mui.Button
        color="error"
        variant="outlined"
        sx={{ bgcolor: "#ffffff", minWidth: { md: 200 } }}
      >
        Delete
      </Mui.Button>
    </Mui.Stack>
  </Mui.Stack>
);
