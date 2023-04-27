import type { Meta, StoryObj } from "@storybook/react";
import Component from "./Sidenav";

const meta: Meta<typeof Component> = {
  title: "Layout/Sidenav",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Sidenav: Story = {
  render: () => <Component open={true} setOpen={() => {}} />,
};
