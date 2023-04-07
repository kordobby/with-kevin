import React from "react";
import Button, { ButtonProps } from "./index";
import { Meta, StoryFn } from "@storybook/react";
import { VscGithubInverted } from "react-icons/vsc";

export default {
  title: "Button",
  component: Button,
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  buttonType: "default",
  children: "버튼",
  onClick: () => console.log("Default"),
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

export const IconButton = Template.bind({});

IconButton.args = {
  buttonType: "default",
  children: "버튼",
  icon: <VscGithubInverted />,
};
export const Link = Template.bind({});

Link.args = {
  buttonType: "link",
  children: "버튼",
};
