import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert text here",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Date",
  },
};

export const Color: Story = {
  args: {
    type: "color",
  },
};

export const Checkbox: Story = {
  args: {
    type: "checkbox",
    placeholder: "Checkbox",
  },
};

export const File: Story = {
  args: {
    type: "file",
    placeholder: "File",
  },
};

export const Image: Story = {
  args: {
    type: "image",
    src: "https://via.placeholder.com/150",
    alt: "Submit",
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
    placeholder: "Radio",
  },
};

export const Range: Story = {
  args: {
    type: "range",
    placeholder: "Range",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search",
  },
};
