<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	import type { Dimension } from '../types/props/Dimension.js';
	import './../core/luna.scss';
	import { writable, type Writable } from 'svelte/store';
	import { SETTINGS } from '../core/env.luna.js';

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

	let dimensionStore = writable<Dimension>(dimension);

	setContext<Writable<Dimension>>(SETTINGS.COMPONENTS.WRAPPER.CONTEXT.DIMENSIONS, dimensionStore);
</script>

<svg
	id="barChart"
	viewBox={
    $dimensionStore.viewBox.minX +
		' ' +
		$dimensionStore.viewBox.minY +
		' ' +
		$dimensionStore.viewBox.width +
		' ' +
		$dimensionStore.viewBox.height}
	xmlns="http://www.w3.org/2000/svg"
	class="flip-verticaly"
>
	{@render children()}
</svg>
height: <input bind:value={$dimensionStore.viewBox.height} />
width: <input bind:value={$dimensionStore.viewBox.width}  />

<style>
	#barChart {
		background-color: lightgray;
	}
</style>
