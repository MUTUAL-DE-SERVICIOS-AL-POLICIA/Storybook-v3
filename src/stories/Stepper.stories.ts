import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Stepper } from "@/components";

const meta = {
  title: "Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {},
};
