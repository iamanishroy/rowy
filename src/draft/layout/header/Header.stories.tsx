import type { Meta, StoryObj } from "@storybook/react";
import Component from "./TopBar";
import { ROUTES, ROUTE_TITLES } from "@src/constants/routes";

const meta: Meta<typeof Component> = {
  title: "Layout/Header",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

const Header: Story = {
  render: () => (
    <Component
      open={false}
      setOpen={(open: boolean) => {}}
      isPermanent={true}
      routeTitle={ROUTE_TITLES[ROUTES.table]}
      title={"anish"}
    />
  ),
};

export { Header };
