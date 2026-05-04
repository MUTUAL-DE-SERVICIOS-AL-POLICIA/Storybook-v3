import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { UserSession } from "@/components";

const meta = {
  title: "UserSession",
  component: UserSession,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserSession>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    username: "User Test",
    name: "John Doe",
    onLogout: () => {},
    urlLogin: "/",
  },
};
