import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ButtonCard } from "@/components";

const meta = {
  title: "ButtonCard",
  component: ButtonCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    title: "Plan Básico",
    price: "$9.99",
    currencySymbol: "USD",
  },
};
