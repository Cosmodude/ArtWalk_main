import { AppBar, Toolbar, Typography, type SxProps } from "@mui/material";

export function TopBar({
  sx,
  title,
  before,
  after,
}: {
  sx?: SxProps;
  title: string;
  before?: JSX.Element;
  after?: JSX.Element;
}) {
  return (
    <AppBar
      variant="outlined"
      elevation={0}
      sx={{
        position: "relative",
        backgroundColor: "#F6F4F8",
        color: "#7135C7",
        border: "none",
        height: "84px",
        ...sx,
      }}
    >
      <Toolbar style={{ height: "100%" }}>
        {before}
        {title && (
          <Typography
            sx={{ ml: 2, flex: 1, fontSize: "32px" }}
            variant="h3"
            component="div"
            fontFamily="Mona Sans"
          >
            {title}
          </Typography>
        )}
        {after}
      </Toolbar>
    </AppBar>
  );
}
