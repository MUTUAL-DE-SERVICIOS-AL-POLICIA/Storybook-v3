import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Search } from "@/components";

const meta = {
  title: "Search",
  component: Search,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockGetData = async () => {
  //console.log("Fetching data...");
};

export const Test: Story = {
  args: {
    searchPerson: mockGetData,
  },
};
