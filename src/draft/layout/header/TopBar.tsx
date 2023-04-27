import { useAtom } from "jotai";
import { colord } from "colord";
import { NavLink } from "react-router-dom";
import { alpha } from "@mui/material/styles";

import {
  useScrollTrigger,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  Typography,
  Grow,
  Fade,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuCloseIcon from "@mui/icons-material/MenuOpen";
import PersonAddIcon from "@mui/icons-material/PersonAddOutlined";

import Logo from "@src/assets/Logo2";
import {
  NAV_DRAWER_WIDTH,
  NAV_DRAWER_COLLAPSED_WIDTH,
} from "@src/layouts/Navigation/NavDrawer";
import UserMenu from "@src/layouts/Navigation/UserMenu";
import UpdateCheckBadge from "@src/layouts/Navigation/UpdateCheckBadge";

import { projectScope, userRolesAtom } from "@src/atoms/projectScope";
import { ROUTES, ROUTE_TITLES } from "@src/constants/routes";
import { Search, SearchIconWrapper, StyledInputBase } from "./styled";
import SearchIcon from "@mui/icons-material/Search";

export const TOP_BAR_HEIGHT = 56;

export interface ITopBarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  isPermanent: boolean;
  routeTitle: typeof ROUTE_TITLES[keyof typeof ROUTE_TITLES];
  title: string;
}

export default function TopBar({
  open,
  setOpen,
  isPermanent,
  routeTitle,
  title,
}: ITopBarProps) {
  const [userRoles] = useAtom(userRolesAtom, projectScope);

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const menuIcon = open ? <MenuCloseIcon /> : <MenuIcon />;

  return (
    <AppBar
      position="fixed"
      // position="sticky"
      color="inherit"
      elevation={trigger ? 1 : 0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: TOP_BAR_HEIGHT,
        backgroundColor: trigger
          ? (theme) =>
              colord(theme.palette.background.paper)
                .mix("#fff", 0.09) // Elevation 8
                .alpha(1)
                .toHslString()
          : "transparent",
        transitionProperty: "box-shadow, background-color",
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar
        sx={{
          position: "relative",
          height: TOP_BAR_HEIGHT,
          minWidth: 0,
          maxWidth: "none",
          "&&": {
            minHeight: TOP_BAR_HEIGHT,
            p: 0,
            pl: (theme) =>
              `max(env(safe-area-inset-left), ${theme.spacing(0.5)})`,
            pr: (theme) =>
              `max(env(safe-area-inset-right), ${theme.spacing(0.5)})`,
          },
        }}
      >
        <Box
          sx={{
            pl: (theme) => theme.spacing(1),
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            pointerEvents: "none",
            ml: (theme) => theme.spacing(1),
          }}
        >
          <Logo />
        </Box>

        <Box
          sx={(theme) => ({
            ml: theme.spacing(3),
            borderRadius: "4px",
            border: `${theme.spacing(0.1)} solid ${theme.palette.grey[700]}`,
            backgroundColor: alpha(theme.palette.common.white, 0.1),
            "&:hover": {
              backgroundColor: alpha(theme.palette.common.white, 0.25),
            },
            height: theme.spacing(4),
            width: theme.spacing(34),
            "&:focus": {
              borderColor: theme.palette.grey[600],
            },
          })}
        >
          <Box
            sx={(theme) => ({
              padding: theme.spacing(0, 1),
              height: `calc(${theme.spacing(4)} - 2 * ${theme.spacing(0.1)})`,
              position: "absolute",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <SearchIcon
              sx={(theme) => ({
                height: "1.4rem",
                color: theme.palette.grey[400],
              })}
            />
          </Box>
          <InputBase
            sx={(theme) => ({
              color: "inherit",
              "& .MuiInputBase-input": {
                padding: theme.spacing(0.4),
                fontSize: "0.9rem",
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(0.9rem + ${theme.spacing(3)})`,
                transition: theme.transitions.create("width"),
                width: "100%",
              },
            })}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: "50%",
            top: "50%",
            transform: "translate(50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color={(theme) => theme.palette.grey[300]} mr="6px">
            Project /
          </Typography>
          <Typography>Table</Typography>
        </Box>
        <Fade
          in
          key={title}
          {...(typeof routeTitle !== "string"
            ? routeTitle.titleTransitionProps
            : undefined)}
        >
          <Box
            sx={[
              {
                flex: 1,
                overflowX: "auto",
                scrollbarWidth: "thin",
                userSelect: "none",
                ml: 1,
              },
              !(routeTitle as any)?.leftAligned && {
                ml: { xs: 1, sm: 40 / 8 + 1, md: 208 / 8 + 1 },
              },
              isPermanent &&
                (routeTitle as any)?.leftAligned && {
                  ml: -NAV_DRAWER_COLLAPSED_WIDTH / 8 + 0.5 + 2,
                },
            ]}
          >
            {typeof routeTitle !== "string" ? (
              routeTitle.titleComponent(open, isPermanent)
            ) : (
              <Typography
                variant="h6"
                component="h1"
                noWrap
                sx={{
                  flexShrink: 0,
                  flexGrow: 1,
                  typography: { sm: "h5" },
                  textAlign: { xs: "left", sm: "center" },
                }}
              >
                {title}
              </Typography>
            )}
          </Box>
        </Fade>

        <Button
          component={NavLink}
          to={ROUTES.members}
          startIcon={<PersonAddIcon />}
          sx={{
            minWidth: 40,
            "&&": { px: { xs: 1, md: 2 } },
            mr: 1,
            "&.active": { visibility: "hidden" },

            "& .text": { display: { xs: "none", md: "inline" } },
            "& .MuiButton-startIcon": { mr: { xs: 0, md: 1 } },
          }}
        >
          <span className="text">Invite team members</span>
        </Button>

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
