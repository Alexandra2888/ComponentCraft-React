import { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

declare const meta: Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const DefaultText: Story;
export declare const ItalicText: Story;
export declare const BoldText: Story;
export declare const UnderlineText: Story;
