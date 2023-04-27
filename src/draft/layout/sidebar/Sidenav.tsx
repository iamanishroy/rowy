import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import WebhookIcon from "@mui/icons-material/Webhook";
import HistoryIcon from "@mui/icons-material/History";
import {
  Export as ExportIcon,
  Extension as ExtensionIcon,
  CloudLogs as CloudLogsIcon,
  Import as ImportIcon,
} from "@src/assets/icons";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import AIChatIcon from "@mui/icons-material/AutoFixHigh";
import HelpIcon from "@mui/icons-material/HelpOutline";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAddOutlined";

import { Drawer } from "./styled";
import LeftDrawer from "./drawer/Drawer";
// const drawerWidth = 240;

const NavItems: {
  top: {
    title: string;
    icon: React.ReactNode;
  }[];
  bottom: {
    title: string;
    icon: React.ReactNode;
  }[];
} = {
  top: [
    {
      title: "Webhook",
      icon: <WebhookIcon />,
    },
    {
      title: "Extension",
      icon: <ExtensionIcon />,
    },
    {
      title: "History",
      icon: <HistoryIcon />,
    },
    {
      title: "AI Chat",
      icon: <AIChatIcon />,
    },
    {
      title: "Settings",
      icon: <SettingsIcon />,
    },
    {
      title: "Info",
      icon: <InfoIcon />,
    },
  ],
  bottom: [
    {
      title: "Add Member",
      icon: <PersonAddIcon />,
    },
    {
      title: "Templates",
      icon: <WidgetsOutlinedIcon />,
    },
    {
      title: "Help",
      icon: <HelpIcon />,
    },
  ],
};

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

function NavItem({
  title,
  icon,
  open,
  setOpen,
}: {
  title: string;
  icon: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <ListItem
      key={title}
      disablePadding
      sx={{
        display: "block",
        margin: "auto",
        width: 48,
      }}
    >
      <ListItemButton
        onClick={() => setOpen(!open)}
        sx={{
          minHeight: 48,
          justifyContent: "center",
          px: 2.5,
          borderRadius: "8px",
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: "auto",
            justifyContent: "center",
          }}
        >
          {icon}
        </ListItemIcon>
        {/* <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} /> */}
      </ListItemButton>
    </ListItem>
  );
}

export default function MiniDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <LeftDrawer open={open} />

      <Drawer variant="permanent">
        <List>
          {NavItems.top.map(({ title, icon }, index) => (
            <NavItem
              key={index}
              title={title}
              icon={icon}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </List>
        {/* <Divider /> */}
        <List
          sx={{
            position: "fixed",
            bottom: 0,
            left: (theme) => theme.spacing(0.5),
          }}
        >
          {NavItems.bottom.map(({ title, icon }, index) => (
            <NavItem
              key={index}
              title={title}
              icon={icon}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </List>
      </Drawer>
    </>
  );
}
