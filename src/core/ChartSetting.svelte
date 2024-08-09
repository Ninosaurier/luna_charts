<script lang="ts">
	import { getContext, onDestroy, setContext, type Snippet } from 'svelte';
  	import type { Dimension } from '../types/props/Dimension.js';
	import { SETTINGS } from './env.luna.js';
	import type { Space } from '../types/styles/Space.js';
	import { derived, writable, type Writable } from 'svelte/store';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();

	let dimension: Dimension = getContext(SETTINGS.COMPONENTS.WRAPPER.CONTEXT.DIMENSIONS);
	let parentValue: Writable<Dimension> = getContext<Writable<Dimension>>(SETTINGS.COMPONENTS.WRAPPER.CONTEXT.DIMENSIONS);
	let leftSpace: number = $state(0);
	let localValue: number = $state(0);

	parentValue.subscribe((x) => {
		leftSpace = x.viewBox.width * 0.1;
		$inspect('leftspace: ', leftSpace)
	})

	//dimensions.subscribe((value: any) => {$inspect(value)})
	

	// console.log('test: ', dimension.viewBox.width);

	// let wrapperSpace: Space = {
	// 	left: dimension.viewBox.width * 0.1,
	// 	right: dimension.viewBox.width * 0.9,
	// 	top: dimension.viewBox.height * 0.7,
	// 	bottom: dimension.viewBox.height * 0.15
	// }

	
	
	// function updateSettings(): void {

	// 	axisPaddingLeft = wrapperPaddingLeft + 5;
	// 	axisPaddingRight = wrapperPaddingRight + 5;
	// 	axisPaddingTop = wrapperPaddingTop + 10;
	// 	axisPaddingBottom = wrapperPaddingBottom + 1;
	// 	setContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_LEFT, axisPaddingLeft);
	// 	setContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_RIGHT, axisPaddingRight);
	// 	setContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_TOP, axisPaddingTop);
	// 	setContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_BOTTOM, axisPaddingBottom);
	// 	$inspect("ChartSetting: ", axisPaddingLeft);
	// }

	// $effect(updateSettings);
</script>

<foreignObject class="flip-text-verticaly" x="10%" y="0" height="100" width="100">
	Config:
	<input bind:value={leftSpace}/>
</foreignObject>
{@render children()}
