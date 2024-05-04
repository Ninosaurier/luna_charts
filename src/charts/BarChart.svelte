<script lang="ts">
	import Wrapper from "./../core/Wrapper.svelte";
	import Header from "./../components/Header.svelte";
	import type { ChartInfo } from "../types/props/ChartInfo.js";
	import type { Dimension } from "../types/props/Dimension.js";

	let { 
		chartInfo = {
			title: 'Example header',
			desc: 'Example description',
		} as ChartInfo,
		dimension = {
			viewBox: {
				minX: 0,
				minY: 0,
				width: 300,
				height: 150
			}
		} as Dimension
	} = $props();
</script>

<Wrapper dimension={dimension}>
	<Header chartInfo={chartInfo}></Header>
</Wrapper>