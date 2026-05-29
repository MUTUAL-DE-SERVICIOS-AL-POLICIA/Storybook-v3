import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CopyButton } from "@/components/copyButton";

const meta = {
  title: "CopyButton",
  component: CopyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    text: "Texto a copiar",
  },
};
