import React from "react";

import Button from "./Button";
import { ButtonProps } from "./ButtonType";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
    color: { control: "color" },
    backgroundColor: { control: "color" },
    text: { control: "text" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "샘플 버튼 1호",
  backgroundColor: "#75b8f7",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "샘플 버튼 2호",
  backgroundColor: "#fed6e3",
};

export const Large = Template.bind({});
Large.args = {
  text: "큰 버튼",
  width: 200,
  height: 60,
};

export const Small = Template.bind({});
Small.args = {
  text: "작은 버튼",
  width: 80,
  height: 30,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled 버튼",
  disabled: true,
};
