import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ButtonRegister } from "@/components";

const meta = {
  title: "ButtonRegister",
  component: ButtonRegister,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonRegister>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    onPress: () => {},
    isPending: false,
    isDisabled: false,
  },
};
