<script lang="ts">
	import { getContext } from "svelte";
	import { SETTINGS } from "../../core/env.luna.js";

	let { series: BarSeries = {} } = $props();

	let marginLeft: number = $state(getContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_LEFT));
	let marginRight: number = $state(getContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_RIGHT));
	let marginTop: number = $state(getContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_TOP));
	let marginBottom: number = $state(getContext(SETTINGS.COMPONENTS.AXIS.CONTEXT.PADDING_BOTTOM));

	function updateMargins(): void {
		marginLeft = marginLeft;
		marginBottom = marginBottom;
		$inspect('Bars marginLeft: ', marginLeft);
	}

	$effect(updateMargins);
</script>

<rect x={marginLeft} y={marginBottom} width="5" height="5"></rect>

<style lang="scss">
</style>
