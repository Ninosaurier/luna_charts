<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import type { Dimension } from '../types/props/Dimension.js';
	import type { Labels } from '../types/props/Labels.js';
	import { GLOBALS } from '../core/env.luna.js';

	let {
		labels = {
			xAxis: {
				name: 'X-Axis',
				minValue: 0,
				maxValue: 0
			},
			leftYAxis: {
				name: 'Left y-Axis',
				minValue: 0,
				maxValue: 0
			},
			rightYAxis: {
				name: '',
				minValue: 0,
				maxValue: 0
			}
		} as Labels
	} = $props();

	let dimension: Dimension = getContext(GLOBALS.COMPONENTS.CONTEXT.WRAPPER.DIMENSIONS);

	let marginLeft: number = $derived(dimension.viewBox.width * 0.1);
	let marginRight: number = $derived(dimension.viewBox.width * 0.9);
	let marginTop: number = $derived(dimension.viewBox.height * 0.7);
	let marginBottom: number = $derived(dimension.viewBox.height * 0.15);

	let xLabelWrapperWidth: number = $derived(dimension.viewBox.width * 0.09);
	let yLabelWrapperWidth: number = $derived(dimension.viewBox.width * 0.2);

	let marginLeftXAxisLabel: number = $derived(marginLeft * 0.05);
	let marginBottomXAxisLabel: number = $derived(marginBottom * 0.9);

	let marginLeftYAxisLeftLabel: number = $derived(marginLeft * 0.05);
	let marginTopYAxisLeftLabel: number = $derived(marginTop);

	let marginRightYAxisRightLabel: number = $derived(marginRight - marginLeft);
	let marginTopYAxisRightLabel: number = $derived(marginTop);

	let xAxisStartXPosition: number = $derived(marginLeft);
	let xAxisStartYPosition: number = $derived(marginBottom);
	let xAxisEndXPosition: number = $derived(marginRight);
	let xAxisEndYPosition: number = $derived(marginBottom);

	let leftYAxisStartXPosition: number = $derived(marginLeft + 0.5);
	let leftYAxisStartYPosition: number = $derived(marginBottom);
	let leftYAxisEndXPosition: number = $derived(marginLeft + 0.5);
	let leftYAxisEndYPosition: number = $derived(marginTop * 0.95);

	let rightYAxisStartXPosition: number = $derived(marginRight - 0.5);
	let rightYAxisStartYPosition: number = $derived(marginBottom);
	let rightYAxisEndXPosition: number = $derived(marginRight - 0.5);
	let rightYAxisEndYPosition: number = $derived(marginTop * 0.95);

	/**
	* As soon as values are assigned to the paddings, the following message appears: "state_referenced_locally". 
	* But the logic runs correctly. A discussion can be found here: https://github.com/sveltejs/svelte/issues/11883
	* The warning was disabled in the svelte.config.js
	*/
	let paddingLeft: number = $state(marginLeft + 5);
	let paddingRight: number = $state(marginRight + 5);
	let paddingTop: number = $state(marginTop + 10 );
	let paddingBottom: number = $state(marginBottom + 1);

	function updatePaddingsContext(): void {
		paddingLeft = marginLeft + 5;
		paddingRight = marginRight + 5;
		paddingTop = marginTop + 10;
		paddingBottom = marginBottom + 1;
		setContext(GLOBALS.COMPONENTS.CONTEXT.AXIS.PADDING_LEFT, paddingLeft);
		setContext(GLOBALS.COMPONENTS.CONTEXT.AXIS.PADDING_RIGHT, paddingRight);
		setContext(GLOBALS.COMPONENTS.CONTEXT.AXIS.PADDING_TOP, paddingTop);
		setContext(GLOBALS.COMPONENTS.CONTEXT.AXIS.PADDING_BOTTOM, paddingBottom);
	}

	$effect(updatePaddingsContext);
</script>

<g id="labels">
	<foreignObject
		id="x-label-wrapper"
		class="flip-text-verticaly overflow-visible"
		width={xLabelWrapperWidth}
		height="1px"
		x={marginLeftXAxisLabel}
		y={marginBottomXAxisLabel}
	>
		<div id="x-label">
			{labels.xAxis.name}
		</div>
	</foreignObject>
	<foreignObject
		id="left-y-label-wrapper"
		class="flip-text-verticaly overflow-visible"
		width={yLabelWrapperWidth}
		height="1px"
		x={marginLeftYAxisLeftLabel}
		y={marginTopYAxisLeftLabel}
	>
		<div id="left-y-label">
			{labels.leftYAxis.name}
		</div>
	</foreignObject>
	{#if labels.rightYAxis.name.length !== 0}
		<foreignObject
			id="right-y-label-wrapper"
			class="flip-text-verticaly overflow-visible"
			width={yLabelWrapperWidth}
			height="1px"
			x={marginRightYAxisRightLabel}
			y={marginTopYAxisRightLabel}
		>
			<div id="right-y-label">
				{labels.rightYAxis.name}
			</div>
		</foreignObject>
	{/if}
</g>
<g id="axis">
	{#if labels.xAxis.name.trim().length !== 0}
		<line
			id="x-axis"
			x1={xAxisStartXPosition}
			y1={xAxisStartYPosition}
			x2={xAxisEndXPosition}
			y2={xAxisEndYPosition}
		/>
	{/if}
	{#if labels.leftYAxis.name.trim().length !== 0}
		<line
			id="left-y-axis"
			x1={leftYAxisStartXPosition}
			y1={leftYAxisStartYPosition}
			x2={leftYAxisEndXPosition}
			y2={leftYAxisEndYPosition}
		/>
	{/if}
	{#if labels.rightYAxis.name.trim().length !== 0}
		<line
			id="right-y-axis"
			x1={rightYAxisStartXPosition}
			y1={rightYAxisStartYPosition}
			x2={rightYAxisEndXPosition}
			y2={rightYAxisEndYPosition}
		/>
	{/if}
</g>

<style lang="scss" type="text/scss">
	$luna-x-axis-label-font-size: 0.2em;
	$luna-x-axis-label-fill-color: #000;

	$luna-left-y-axis-label-font-size: 0.2em;
	$luna-left-y-axis-label-fill-color: #000;

	$luna-right-y-axis-label-font-size: 0.2em;
	$luna-right-y-axis-label-fill-color: #000;

	$luna-x-axis-line-stroke-color: #000;
	$luna-x-axis-line-stroke-size: 1px;

	$luna-left-y-axis-line-stroke-color: #000;
	$luna-left-y-axis-line-stroke-size: 1px;

	$luna-right-y-axis-line-stroke-color: #000;
	$luna-right-y-axis-line-stroke-size: 1px;

	#x-label {
		font-size: $luna-x-axis-label-font-size;
		fill: $luna-x-axis-label-fill-color;
		text-align: center;
	}

	#left-y-label {
		font-size: $luna-left-y-axis-label-font-size;
		fill: $luna-left-y-axis-label-fill-color;
		text-align: center;
	}

	#right-y-label {
		font-size: $luna-right-y-axis-label-font-size;
		fill: $luna-right-y-axis-label-fill-color;
		text-align: center;
	}

	#x-axis {
		stroke: $luna-x-axis-line-stroke-color;
		stroke-width: $luna-x-axis-line-stroke-size;
	}

	#left-y-axis {
		stroke: $luna-left-y-axis-line-stroke-color;
		stroke-width: $luna-left-y-axis-line-stroke-size;
	}

	#right-y-axis {
		stroke: $luna-right-y-axis-line-stroke-color;
		stroke-width: $luna-right-y-axis-line-stroke-size;
	}
</style>
