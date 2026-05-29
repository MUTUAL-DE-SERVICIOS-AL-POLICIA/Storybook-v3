import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BreadcrumbsState } from "@/components";

const meta = {
  title: "BreadcrumbsState",
  component: BreadcrumbsState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BreadcrumbsState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    color: "danger",
    description: "Error al cargar los datos del servidor",
    href: "/",
  },
};
