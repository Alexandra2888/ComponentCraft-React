import type { Meta, StoryObj } from "@storybook/react";
import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
