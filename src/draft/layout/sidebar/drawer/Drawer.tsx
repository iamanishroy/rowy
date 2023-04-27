import Drawer, { DrawerProps } from "@mui/material/Drawer";

export default function LeftDrawer({ ...props }: DrawerProps) {
  return (
    <Drawer
      anchor="left"
      variant="persistent"
      hideBackdrop={true}
      sx={(theme) => ({
        ".MuiDrawer-paper": {
          top: 56,
          width: theme.spacing(36),
          left: `calc(${theme.spacing(8)} + 2px)`,
          padding: theme.spacing(2),
        },
      })}
      {...props}
    >
      <div>Left Drawer</div>
    </Drawer>
  );
}
