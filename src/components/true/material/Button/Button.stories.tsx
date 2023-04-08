import React from "react";
import { ButtonProps, PrimitiveButton } from "./index";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { VscGithubInverted } from "react-icons/vsc";

const meta: Meta<typeof PrimitiveButton> = {
  title: "TrueComponents/Material/Button",
  component: PrimitiveButton,
};

export default meta;

type Story = StoryObj<typeof PrimitiveButton>;
export const DefaultStory: Story = {
  args: {
    color: "black",
    theme: "primary",
    children: "버튼",
    buttonSize: "mid",
    disabled: false,
    block: false,
    onClick: () => console.log("이윤 짱"),
  },
  argTypes: {
    disabled: { control: "boolean", description: "비활성화 상태" },
    color: { description: "(필요 시) 버튼 색상을 정의합니다." },
    onClick: {
      action: () => {
        console.log("clicked");
      },
      description: "클릭 이벤트 콜백 함수입니다.",
    },
    buttonSize: {
      description: "버튼의 사이즈를 정의합니다.",
    },
    icon: {
      description: "(필요 시) 아이콘을 삽입합니다.",
    },
    theme: {
      description: "버튼 타입을 정의합니다.",
    },
    block: {
      control: "boolean",
      description: "block 일 경우 width 100%입니다.",
    },
    children: {
      description: "버튼명을 삽입합니다.",
    },
  },
};

const Template: StoryFn<ButtonProps> = (args) => <PrimitiveButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: "primary",
  buttonSize: "mid",
  color: "black",
  children: "버튼",
  disabled: false,
  onClick: () => console.log("이윤 짱"),
};

export const Link = Template.bind({});
Link.args = {
  theme: "link",
  buttonSize: "mid",
  color: "black",
  children: "버튼",
  disabled: false,
  onClick: () => console.log("이윤 짱"),
};

export const Ghost = Template.bind({});
Ghost.args = {
  theme: "ghost",
  buttonSize: "large",
  color: "black",
  children: "버튼",
  disabled: false,
  onClick: () => console.log("이윤 짱"),
};

export const Icon = Template.bind({});
Icon.args = {
  theme: "icon",
  buttonSize: "large",
  color: "black",
  icon: <VscGithubInverted />,
  disabled: false,
  onClick: () => console.log("이윤 짱"),
};
