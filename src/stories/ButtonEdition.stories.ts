import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ButtonEdition } from "@/components";

const meta = {
  title: "ButtonEdition",
  component: ButtonEdition,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonEdition>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    onPress: () => {},
    isEdit: false,
  },
};
