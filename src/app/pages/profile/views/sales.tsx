import * as Mui from "@mui/material";

export const Sales = () => (
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
    <Mui.Typography color="primary" variant="h6">
      My Sales
    </Mui.Typography>
    <Mui.Card
      sx={{
        width: 150,
        height: 200,
      }}
    >
      <Mui.CardContent component={Mui.Stack} spacing={1}>
        <Mui.CardMedia component="img" image="" />
        <Mui.Box>
          <Mui.Typography variant="body1">Books</Mui.Typography>
          <Mui.Typography variant="subtitle1">some content</Mui.Typography>
        </Mui.Box>
      </Mui.CardContent>
    </Mui.Card>
    <Mui.Card
      sx={{
        width: 150,
        height: 200,
      }}
    >
      <Mui.CardContent component={Mui.Stack} spacing={1}>
        <Mui.CardMedia component="img" image="" />
        <Mui.Box>
          <Mui.Typography variant="body1">Books</Mui.Typography>
          <Mui.Typography variant="subtitle1" color="text.secondary">
            some content
          </Mui.Typography>
        </Mui.Box>
      </Mui.CardContent>
    </Mui.Card>
  </Mui.Stack>
);
