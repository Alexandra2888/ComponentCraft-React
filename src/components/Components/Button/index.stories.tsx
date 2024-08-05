import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

//solid
export const SolidPrimary: Story = {
  args: {
    children: "Primary Solid",
    variant: "solid",
    size: "md",
    colorscheme: "primary",
  },
};

export const SolidSecondary: Story = {
  args: {
    children: "Secondary Solid",
    variant: "solid",
    size: "md",
    colorscheme: "secondary",
  },
};

export const SolidSuccess: Story = {
  args: {
    children: "Success Solid",
    variant: "solid",
    size: "md",
    colorscheme: "success",
  },
};

export const SolidDanger: Story = {
  args: {
    children: "Danger Solid",
    variant: "solid",
    size: "md",
    colorscheme: "danger",
  },
};

export const SolidWarning: Story = {
  args: {
    children: "Warning Solid",
    variant: "solid",
    size: "md",
    colorscheme: "warning",
  },
};

export const SolidInfo: Story = {
  args: {
    children: "Info Solid",
    variant: "solid",
    size: "md",
    colorscheme: "info",
  },
};

export const SolidLight: Story = {
  args: {
    children: "Light Solid",
    variant: "solid",
    size: "md",
    colorscheme: "light",
  },
};

export const SolidDark: Story = {
  args: {
    children: "Dark Solid",
    variant: "solid",
    size: "md",
    colorscheme: "dark",
  },
};

// outline
export const OutlinePrimary: Story = {
  args: {
    children: "Primary Outline",
    variant: "outline",
    size: "md",
    colorscheme: "primary",
  },
};

export const OutlineSecondary: Story = {
  args: {
    children: "Secondary Outline",
    variant: "outline",
    size: "md",
    colorscheme: "secondary",
  },
};

export const OutlineSuccess: Story = {
  args: {
    children: "Success Outline",
    variant: "outline",
    size: "md",
    colorscheme: "success",
  },
};

export const OutlineDanger: Story = {
  args: {
    children: "Danger Outline",
    variant: "outline",
    size: "md",
    colorscheme: "danger",
  },
};

export const OutlineWarning: Story = {
  args: {
    children: "Warning Outline",
    variant: "outline",
    size: "md",
    colorscheme: "warning",
  },
};

export const OutlineInfo: Story = {
  args: {
    children: "Info Outline",
    variant: "outline",
    size: "md",
    colorscheme: "info",
  },
};

export const OutlineLight: Story = {
  args: {
    children: "Light Outline",
    variant: "outline",
    size: "md",
    colorscheme: "light",
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Dark Outline",
    variant: "outline",
    size: "md",
    colorscheme: "dark",
  },
};

// ghost
export const GhostPrimary: Story = {
  args: {
    children: "Primary Ghost",
    variant: "ghost",
    size: "md",
    colorscheme: "primary",
  },
};

export const GhostSecondary: Story = {
  args: {
    children: "Secondary Ghost",
    variant: "ghost",
    size: "md",
    colorscheme: "secondary",
  },
};

export const GhostSuccess: Story = {
  args: {
    children: "Success Ghost",
    variant: "ghost",
    size: "md",
    colorscheme: "success",
  },
};

export const GhostDanger: Story = {
  args: {
    children: "Danger Ghost",
    variant: "ghost",
    size: "md",
    colorscheme: "danger",
  },
};

export const GhostWarning: Story = {
  args: {
    children: "Warning Ghost",
    variant: "ghost",
    size: "md",
    colorscheme: "warning",
  },
};

export const GhostInfo: Story = {
  args: {
    children: "Info Ghost",
    variant: "ghost",
    size: "md",
    colorscheme: "info",
  },
};
