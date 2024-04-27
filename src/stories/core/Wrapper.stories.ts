import type { Meta, StoryObj } from '@storybook/svelte';
import Wrapper from '../../core/Wrapper.svelte';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Core/Wrapper',
	component: Wrapper,
	tags: ['autodocs']
} satisfies Meta<Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Vanilla: Story = {};
