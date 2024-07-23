import Button, { ButtonProps } from "../components/Button";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
  argTypes: { clickHandler: { action: "clicked" } },
} as Meta<ButtonProps>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Red",
  backgroundColor: "red",
  size: "md",
  color: "white",
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "Blue",
  backgroundColor: "blue",
  size: "md",
  color: "white",
};

export const SmButton = Template.bind({});
SmButton.args = {
  label: "Small Button",
  backgroundColor: "gray",
  size: "sm",
};

export const LgButton = Template.bind({});
LgButton.args = {
  label: "Large Button",
  backgroundColor: "gray",
  size: "lg",
};

export const MainButton = Template.bind({});
MainButton.args = {
  label: "Main Button",
  backgroundColor: "brown",
  size: "md",
};
