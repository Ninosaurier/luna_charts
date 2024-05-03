import type { Meta, StoryObj } from '@storybook/svelte';
import BarChart from '../../../charts/BarChart.svelte';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Charts/BarChart',
	component: BarChart,
	tags: ['']
} satisfies Meta<BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

//https://storybook.js.org/docs/get-started/whats-a-story
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Vanilla: Story = {};
export const OverwriteStyle: Story = {
	args:{}
};
