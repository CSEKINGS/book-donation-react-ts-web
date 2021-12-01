import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Hooks from "src/app/hooks";
import * as Notistack from "notistack";

export const UserInfo = () => {
  const { customNavigate } = Hooks.useNavigate();
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { user } = Hooks.useSignInCheck();
  const logout = () => {
    localStorage.setItem("bdtoken", "");
    enqueueSnackbar("Logout Successfull!", { variant: "success" });
    customNavigate("..");
  };

  return (
    <Mui.Stack
      spacing={0}
      justifyContent="space-between"
      component={Mui.Paper}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        mt: 2,
        p: 2,
        position: "relative",
      }}
    >
      <Mui.Stack justifyContent="center" alignItems="center">
        <Mui.Avatar
          variant="square"
          sx={{ height: 100, width: 100 }}
          src={user.profile}
        />
        <Mui.Typography variant="caption" color="text.secondary" align="center">
          {user.about}
        </Mui.Typography>
      </Mui.Stack>
      <Mui.Table>
        <Mui.TableHead>
          <Mui.TableRow>
            <Mui.TableCell colSpan={2}>
              <Mui.Typography variant="h5">{user.name}</Mui.Typography>
            </Mui.TableCell>
          </Mui.TableRow>
        </Mui.TableHead>
        <Mui.TableBody>
          {Object.entries(user)
            .slice(7)
            .map(([key, val], index) => (
              <Mui.TableRow key={index}>
                <Mui.TableCell>
                  <Mui.Typography variant="subtitle1">{key}</Mui.Typography>
                </Mui.TableCell>
                <Mui.TableCell>
                  <Mui.Typography variant="subtitle1">{val}</Mui.Typography>
                </Mui.TableCell>
              </Mui.TableRow>
            ))}
        </Mui.TableBody>
      </Mui.Table>
      <Mui.Stack
        justifyContent="space-between"
        sx={{
          flexDirection: { xs: "row", md: "column" },
          minHeight: "100%",
        }}
      >
        <Mui.IconButton
          color="error"
          sx={{
            top: 5,
            right: 5,
            alignSelf: "end",
            position: { xs: "absolute", md: "relative" },
            zIndex: 1,
          }}
          onClick={logout}
        >
          <MuiIcons.Logout />
        </Mui.IconButton>
        <Mui.Button
          variant="outlined"
          sx={{ bgcolor: "#ffffff", minWidth: { md: 200 } }}
          onClick={() => customNavigate("user-edit", { state: { user } })}
        >
          Edit
        </Mui.Button>
        <Mui.Button
          color="error"
          variant="outlined"
          sx={{ bgcolor: "#ffffff", minWidth: { md: 200 } }}
          onClick={() => customNavigate("delete", { state: { user } })}
        >
          Delete
        </Mui.Button>
      </Mui.Stack>
    </Mui.Stack>
  );
};