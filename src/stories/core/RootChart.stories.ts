import type { Meta, StoryObj } from '@storybook/svelte';
import RootChart from '../../core/RootChart.svelte';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'Core/RootChart',
	component: RootChart,
	tags: ['autodocs']
} satisfies Meta<RootChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Vanilla: Story = {};
