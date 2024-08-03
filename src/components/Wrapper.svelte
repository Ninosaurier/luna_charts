<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	import type { Dimension } from '../types/props/Dimension.js';
	import './../core/luna.scss';
	import { writable } from 'svelte/store';
	import { GLOBALS } from '../core/env.luna.js';

	type Props = {
		children: Snippet;
		dimension: Dimension;
	};

	let {
		children,
		dimension = {
			viewBox: {
				minX: 0,
				minY: 0,
				width: 300,
				height: 150
			}
		} as Dimension
	}: Props = $props();

	setContext(GLOBALS.COMPONENTS.CONTEXT.WRAPPER.DIMENSIONS, dimension);

	function setDimension(newDimension: Dimension): Dimension {
		dimension = newDimension;
		setContext(GLOBALS.COMPONENTS.CONTEXT.WRAPPER.DIMENSIONS, dimension);
		//$inspect('Test: ', dimension);

		return dimension;
	}

	let dimensionHandler = writable(dimension);
	dimensionHandler.update(setDimension);
</script>

<svg
	id="barChart"
	viewBox={dimension.viewBox.minX +
		' ' +
		dimension.viewBox.minY +
		' ' +
		dimension.viewBox.width +
		' ' +
		dimension.viewBox.height}
	xmlns="http://www.w3.org/2000/svg"
	class="flip-verticaly"
>
	{@render children()}
</svg>
height: <input bind:value={dimension.viewBox.height} />
width: <input bind:value={dimension.viewBox.width} />

<style>
	#barChart {
		background-color: lightgray;
	}
</style>
