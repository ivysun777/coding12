import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "Text",
  component: Text,
  argTypes: {
    color: { control: "color" },
    background: { control: "color" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    disabled: false,
    text: "Active Text",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "Disabled Text",
  },
};
