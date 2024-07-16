import type { Meta, StoryObj } from '@storybook/svelte';
// import Wrapper from '../../core/Wrapper.svelte';

import Wrapper from './WrapperTest.svelte'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'Core/Wrapper',
	component: Wrapper,
} satisfies Meta<Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Empty: Story = {

};
