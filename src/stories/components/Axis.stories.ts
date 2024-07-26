import type { Meta, StoryObj } from '@storybook/svelte';
import Axis from '../../components/Axis.svelte';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Axis',
	component: Axis,
} satisfies Meta<Axis>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vanilla: Story = {};