import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    background: { control: "color" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    disabled: false,
    options: ["Tom", "Jerry", "Ivy"],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options: ["Tom", "Jerry", "Ivy"],
  },
};
