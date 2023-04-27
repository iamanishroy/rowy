import type { Meta, StoryObj } from "@storybook/react";
import TopBar from "./header";
import SideNav from "./sidebar";
import { ROUTES, ROUTE_TITLES } from "@src/constants/routes";
import { Box, Typography, styled } from "@mui/material";
import { useState } from "react";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  // background: "pink",
  flexGrow: 1,
  marginTop: theme.spacing(7),
  padding: theme.spacing(2),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: theme.spacing(0),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: theme.spacing(36),
  }),
}));

function Component() {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <TopBar
        open={false}
        setOpen={(open: boolean) => {}}
        isPermanent={true}
        routeTitle={ROUTE_TITLES[ROUTES.table]}
        title={"anish"}
      />
      <SideNav open={open} setOpen={setOpen} />
      <Main open={open}>
        {[...new Array(3)].map((_, index) => (
          <Typography key={index} paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
        ))}
      </Main>
    </Box>
  );
}
const meta: Meta<typeof Component> = {
  title: "Layout",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Layout: Story = {
  render: () => <Component />,
};
