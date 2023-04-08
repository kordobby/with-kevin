import type { Meta, StoryObj } from "@storybook/react";
import CreditCard from "./CreditCard";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CreditCard> = {
  title: "TrueComponents/Molecules/Credit Card",
  component: CreditCard,
};

export default meta;
type Story = StoryObj<typeof CreditCard>;

export const CreditCardStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};
