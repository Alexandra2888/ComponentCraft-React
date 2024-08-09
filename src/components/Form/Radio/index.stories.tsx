import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "../Radio";

const meta: Meta<typeof Radio> = {
  title: "Form/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
