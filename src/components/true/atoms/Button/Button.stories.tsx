import React from "react";
import Button, { ButtonProps } from "./index";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { VscGithubInverted } from "react-icons/vsc";

const meta: Meta<typeof Button> = {
  title: "TrueComponents/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;
export const DefaultStory: Story = {
  args: {
    color: "black",
    theme: "primary",
    onClick: () => console.log("이윤 짱"),
  },
  argTypes: {
    disabled: { control: "boolean", description: "비활성화 상태" },
    color: { description: "버튼 색상을 정의합니다." },
    onClick: {
      action: () => {
        console.log("clicked");
      },
      description: "클릭 이벤트 콜백 함수",
    },
    icon: {
      description: "아이콘이 필요한 경우 삽입합니다.",
    },
    theme: {
      description: "버튼 타입을 정의합니다.",
    },
    block: {
      description: "block 일 경우 width 100%입니다.",
    },
  },
};

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...DefaultStory.args,
  theme: "default",
  children: "버튼",
  onClick: () => console.log("Default"),
};

export const Primary = Template.bind({});
Primary.args = {
  ...DefaultStory.args,
  theme: "primary",
  children: "버튼",
  color: "blue",
  onClick: () => console.log("Primary"),
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...DefaultStory.args,
  theme: "ghost",
  children: "버튼",
  color: "red",
};

export const IconText = Template.bind({});
IconText.args = {
  ...DefaultStory.args,
  theme: "default",
  children: "버튼",
  color: "black",
  icon: <VscGithubInverted />,
  onClick: () => console.log("IconButton"),
};

export const Link = Template.bind({});
Link.args = {
  ...DefaultStory.args,
  theme: "link",
  children: "버튼",
  onClick: () => console.log("Link"),
};

export const Icon = Template.bind({});
Icon.args = {
  ...DefaultStory.args,
  theme: "icon",
  children: <VscGithubInverted />,
  onClick: () => console.log("Link"),
};
