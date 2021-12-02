import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Container from "src/app/container";
import * as Router from "react-router-dom";
import * as Components from "src/app/components";
import * as Hooks from "src/app/hooks";
import * as Pages from "src/app/pages";
import * as Notistack from "notistack";
import copy from "copy-to-clipboard";

export const BookDetails = () => {
  const { enqueueSnackbar } = Notistack.useSnackbar();
  const { customNavigate } = Hooks.useNavigate();
  const { book, loading } = Hooks.useGetBooksByID();
  const {
    state: { role },
  } = Router.useLocation();
  const { books } = Hooks.useGetBooks(role);

  const handleShare = () => {
    copy(window.location.href);
    // navigator.clipboard.writeText(window.location.href);
    enqueueSnackbar("Copied to clipboard", { variant: "success" });
  };
  return (
    <>
      <Components.Dialog open={true} back={book?.name} fullScreen>
        <Mui.DialogContent>
          {loading ? (
            <Mui.LinearProgress />
          ) : (
            <Mui.Stack justifyContent="center">
              <Mui.Box sx={{ position: "relative" }}>
                <Mui.CardMedia
                  component="img"
                  image={book?.photo}
                  sx={{ minHeight: { xs: "40vw", sm: "35vw", md: "30vw" } }}
                />
                <Mui.IconButton
                  size="large"
                  sx={{
                    bgcolor: "#ffffff",
                    position: "absolute",
                    right: 5,
                    bottom: 5,
                    "&:hover": {
                      bgcolor: "#ffffff",
                    },
                  }}
                  onClick={handleShare}
                >
                  <MuiIcons.Share color="success" />
                </Mui.IconButton>
              </Mui.Box>
              <Mui.Stack
                justifyContent="space-between"
                alignItems="center"
                direction="row"
              >
                <Mui.Box>
                  <Mui.Chip
                    label={`Author: ${book?.author}`}
                    color="primary"
                    size="medium"
                    variant="outlined"
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                    }}
                  />
                  <Mui.Chip
                    label={`Category: ${book?.categeory}`}
                    color="primary"
                    size="medium"
                    variant="outlined"
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                    }}
                  />
                  <Mui.Chip
                    label={`Quantity: ${book?.quantity}`}
                    color="primary"
                    size="medium"
                    variant="outlined"
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                    }}
                  />
                </Mui.Box>
                <Mui.Typography
                  variant="caption"
                  color="text.secondary"
                  textAlign="right"
                  display="flow-root list-item"
                >
                  {book?.uploadDate}
                </Mui.Typography>
              </Mui.Stack>
              <Mui.Stack direction="row" alignItems="center">
                <Mui.Avatar src={book?.profile} />
                <Mui.Typography variant="h6">{book?.userName}</Mui.Typography>
              </Mui.Stack>
              <Mui.Typography variant="body1">
                {book?.description}
              </Mui.Typography>
              <Pages.Profile.Views.ProfileCard
                title="Related Books"
                books={books?.slice(0, 6)}
                role={role}
                onClick={() =>
                  customNavigate("../../search", {
                    state: { author: book?.author, categeory: book?.categeory },
                  })
                }
              />
              <Container.BookRole book={book} role={role} />
            </Mui.Stack>
          )}
        </Mui.DialogContent>
      </Components.Dialog>
      <Router.Outlet />
    </>
  );
};
