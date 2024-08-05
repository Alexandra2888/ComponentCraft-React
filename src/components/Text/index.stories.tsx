import type { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    as: "h1",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima earum omnis consequatur, sint tempore veniam unde porro, ad eius quis ratione dignissimos magnam expedita ipsa doloribus quos iure id!",
  },
};

export const ItalicText: Story = {
  args: {
    as: "h1",
    italic: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima earum omnis consequatur, sint tempore veniam unde porro, ad eius quis ratione dignissimos magnam expedita ipsa doloribus quos iure id!",
  },
};

export const BoldText: Story = {
  args: {
    as: "h1",
    weight: "bold",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima earum omnis consequatur, sint tempore veniam unde porro, ad eius quis ratione dignissimos magnam expedita ipsa doloribus quos iure id!",
  },
};

export const UnderlineText: Story = {
  args: {
    as: "h1",
    underline: true,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga minima earum omnis consequatur, sint tempore veniam unde porro, ad eius quis ratione dignissimos magnam expedita ipsa doloribus quos iure id!",
  },
};
