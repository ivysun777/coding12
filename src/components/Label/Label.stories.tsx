import { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "Label",
  component: Label,
  argTypes: {
    background: { control: "color" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    disabled: false,
    text: "Active Label",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "Disabled Label",
  },
};
