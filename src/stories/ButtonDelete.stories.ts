import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ButtonDelete } from "@/components";

const meta = {
  title: "ButtonDelete",
  component: ButtonDelete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    onPress: () => {},
    isDisabled: false,
    isPending: false,
  },
};
