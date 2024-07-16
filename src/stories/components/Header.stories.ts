import type { Meta, StoryObj } from '@storybook/svelte';
import Header from '../../components/Header.svelte';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Header',
	component: Header,
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vanilla: Story = {};

