import type { Meta, StoryObj } from "@storybook/react";
import MobileLayout from "./MobileLayout";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof MobileLayout> = {
  title: "TrueComponents/Mobile Layout",
  component: MobileLayout,
};

export default meta;
type Story = StoryObj<typeof MobileLayout>;

export const MobileLayoutStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
