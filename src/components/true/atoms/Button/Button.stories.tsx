import React from "react";
import Button, { ButtonProps } from "./index";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttonType: "default",
  children: "버튼",
};

export const Primary = Template.bind({});

Primary.args = {
  buttonType: "primary",
  children: "버튼",
};

export const Ghost = Template.bind({});

Ghost.args = {
  buttonType: "ghost",
  children: "버튼",
};
