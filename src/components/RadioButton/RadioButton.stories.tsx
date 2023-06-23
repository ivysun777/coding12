import { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

const meta = {
  title: "RadioButton",
  component: RadioButton,
  argTypes: {
    background: { control: "color" },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    disabled: false,
    text: "Active RadioButton",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: "Disabled RadioButton",
  },
};
