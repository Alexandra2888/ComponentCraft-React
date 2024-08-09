import type { Meta, StoryObj } from "@storybook/react";
import { Checklist } from "../CheckList";

const meta: Meta<typeof Checklist> = {
  title: "Form/Checklist",
  component: Checklist,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
