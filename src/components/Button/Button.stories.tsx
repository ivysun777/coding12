import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    background: { control: "color" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    disabled: false,
    text: "Active Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "Disabled Button",
  },
};
