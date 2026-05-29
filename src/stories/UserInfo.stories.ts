import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { UserInfo } from "@/components";

const meta = {
  title: "UserInfo",
  component: UserInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    user: {
      fullName: "Juan Pérez",
      identityCard: "12345678",
      nup: "2023-00001",
      kinship: "Hijo",
      state: true,
    },
    isPolice: true,
    isRegister: true,
    isEdit: true,
    isDelete: true,
    hasPhoto: true,
  },
};
