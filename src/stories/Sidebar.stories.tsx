import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Sidebar } from "@/components";
import { SidebarProvider } from "@/context";

const meta = {
  title: "Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    sidebar: [
      { name: "Folders", id: "FO" },
      { name: "Gastos Administrativos", id: "GA" },
      { name: "Amortizaciones", id: "AM" },
    ],
  },
};
