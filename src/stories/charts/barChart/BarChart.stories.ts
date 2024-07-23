import type { Meta, StoryObj } from '@storybook/svelte';
import BarChart from '../../../charts/BarChart.svelte';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Charts/BarChart',
	component: BarChart,
} satisfies Meta<BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

//https://storybook.js.org/docs/get-started/whats-a-story
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// Tutorial examples
export const FullBarChartExample: Story = {
	args: {
		chartInfo: {
			title: "Basic example chart",
			desc: `
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
				ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
				justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
			`
		},
		labels: {
			xAxis: { name: "X-Axis", minValue: 0, maxValue: 0},
			leftYAxis: {name: "Left y-Axis", minValue: 0, maxValue: 0},
			rightYAxis: {name: "Right x-Axis", minValue: 0, maxValue: 0}
		}
	}
};
export const BasicBarChartWithEmbeddedHTMLDesc: Story = {
	args: {
		chartInfo: {
			title: "Basic example chart",
			desc: `Do you see it? <b>You can use embedded HTML here</b>. Lorem Impsum`
		}
	}
};

// Full BarChat Examples
export const Vanilla: Story = {};
export const OverwriteStyle: Story = {
	args:{}
};
