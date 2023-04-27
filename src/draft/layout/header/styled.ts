import { styled, alpha } from "@mui/material/styles";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import { InputBase, Toolbar as Toolbar_ } from "@mui/material";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  height: theme.spacing(8),
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

export const Toolbar = styled(Toolbar_)(({ theme }) => ({
  minHeight: "unset !important",
  margin: theme.spacing(2),
  height: theme.spacing(5),
  padding: "0px !important",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(3),
}));

export const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `1.2px solid ${theme.palette.grey[700]}`,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  height: "100%",
  width: "auto",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "calc(100% - 3px)",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.3),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
