<script lang="ts">
	import type { Dimension } from '../types/props/Dimension.js';
	import type { Labels } from '../types/props/Labels.js';

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
				name: 'Right y-Axis',
				minValue: 0,
				maxValue: 0
			}
		} as Labels,
		dimension = {
			viewBox: {
				minX: 0,
				minY: 0,
				width: 300,
				height: 150
			}
		} as Dimension
	} = $props();

	let MARGIN_LEFT: number = $derived(dimension.viewBox.width * 0.1);
	let MARGIN_RIGHT: number = $derived(dimension.viewBox.width * 0.9);
	let MARGIN_TOP: number = $derived(dimension.viewBox.height * 0.7);
	let MARGIN_BOTTOM: number = $derived(dimension.viewBox.height * 0.15);

	let X_LABEL_WRAPPER_WIDTH: number = $derived(dimension.viewBox.width * 0.09);
	let Y_LABEL_WRAPPER_WIDTH: number = $derived(dimension.viewBox.width * 0.2);

	let MARGIN_LEFT_X_AXIS_LABEL: number = $derived(MARGIN_LEFT * 0.05);
	let MARGIN_BOTTOM_X_AXIS_LABEL: number = $derived(MARGIN_BOTTOM * 0.90);

	let MARGIN_LEFT_Y_AXIS_LEFT_LABEL: number = $derived(MARGIN_LEFT * 0.05);
	let MARGIN_TOP_Y_AXIS_LEFT_LABEL: number = $derived(MARGIN_TOP * 1);

	let MARGIN_RIGHT_Y_AXIS_RIGHT_LABEL: number = $derived(MARGIN_RIGHT - MARGIN_LEFT);
	let MARGIN_TOP_Y_AXIS_RIGHT_LABEL: number = $derived(MARGIN_TOP * 1);

	let X_AXIS_START_X_POSITION: number = $derived(MARGIN_LEFT);
	let X_AXIS_START_Y_POSITION: number = $derived(MARGIN_BOTTOM);
	let X_AXIS_END_X_POSITION: number = $derived(MARGIN_RIGHT);
	let X_AXIS_END_Y_POSITION: number = $derived(MARGIN_BOTTOM);

	let LEFT_Y_AXIS_START_X_POSITION: number = $derived(MARGIN_LEFT + 0.5);
	let LEFT_Y_AXIS_START_Y_POSITION: number = $derived(MARGIN_BOTTOM);
	let LEFT_Y_AXIS_END_X_POSITION: number = $derived(MARGIN_LEFT + 0.5);
	let LEFT_Y_AXIS_END_Y_POSITION: number = $derived(MARGIN_TOP * 0.95);

	let RIGHT_Y_AXIS_START_X_POSITION: number = $derived(MARGIN_RIGHT - 0.5);
	let RIGHT_Y_AXIS_START_Y_POSITION: number = $derived(MARGIN_BOTTOM);
	let RIGHT_Y_AXIS_END_X_POSITION: number = $derived(MARGIN_RIGHT - 0.5);
	let RIGHT_Y_AXIS_END_Y_POSITION: number = $derived(MARGIN_TOP * 0.95);
</script>

<g id="labels">
	<foreignObject
		id="x-label-wrapper"
		class="flip-text-verticaly overflow-visible"
		width={X_LABEL_WRAPPER_WIDTH}
		height="1px"
		x={MARGIN_LEFT_X_AXIS_LABEL}
		y={MARGIN_BOTTOM_X_AXIS_LABEL}
	>
		<div id="x-label">
			{labels.xAxis.name}
		</div>
	</foreignObject>
	<foreignObject
		id="left-y-label-wrapper"
		class="flip-text-verticaly overflow-visible"
		width={Y_LABEL_WRAPPER_WIDTH}
		height="1px"
		x={MARGIN_LEFT_Y_AXIS_LEFT_LABEL}
		y={MARGIN_TOP_Y_AXIS_LEFT_LABEL}
	>
		<div id="left-y-label">
			{labels.leftYAxis.name}
		</div>
	</foreignObject>
	<foreignObject
		id="right-y-label-wrapper"
		class="flip-text-verticaly overflow-visible"
		width={Y_LABEL_WRAPPER_WIDTH}
		height="1px"
		x={MARGIN_RIGHT_Y_AXIS_RIGHT_LABEL}
		y={MARGIN_TOP_Y_AXIS_RIGHT_LABEL}
	>
		<div id="right-y-label">
			{labels.rightYAxis.name}
		</div>
	</foreignObject>
</g>
<g id="axis">
	<line
		id="x-axis"
		x1={X_AXIS_START_X_POSITION}
		y1={X_AXIS_START_Y_POSITION}
		x2={X_AXIS_END_X_POSITION}
		y2={X_AXIS_END_Y_POSITION}
	/>
	<line
		id="left-y-axis"
		x1={LEFT_Y_AXIS_START_X_POSITION}
		y1={LEFT_Y_AXIS_START_Y_POSITION}
		x2={LEFT_Y_AXIS_END_X_POSITION}
		y2={LEFT_Y_AXIS_END_Y_POSITION}
	/>
	<line
		id="right-y-axis"
		x1={RIGHT_Y_AXIS_START_X_POSITION}
		y1={RIGHT_Y_AXIS_START_Y_POSITION}
		x2={RIGHT_Y_AXIS_END_X_POSITION}
		y2={RIGHT_Y_AXIS_END_Y_POSITION}
	/>
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
