import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ButtonCancel } from "@/components";

const meta = {
  title: "ButtonCancel",
  component: ButtonCancel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonCancel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    onPress: () => {},
    isPending: false,
    isDisabled: false,
    isIconOnly: false,
  },
};
