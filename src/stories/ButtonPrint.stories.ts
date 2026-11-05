import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ButtonPrint } from "@/components";

const meta = {
  title: "ButtonPrint",
  component: ButtonPrint,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonPrint>;

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
