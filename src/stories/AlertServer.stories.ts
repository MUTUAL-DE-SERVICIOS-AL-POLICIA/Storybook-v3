import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { AlertServer } from "@/components";

const meta = {
  title: "AlertServer",
  component: AlertServer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AlertServer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    color: "danger",
    description: "Error al cargar los datos del servidor",
    href: "/",
  },
};
