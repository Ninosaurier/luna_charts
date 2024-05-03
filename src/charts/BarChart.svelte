<script lang="ts">
	import Wrapper from "./../core/Wrapper.svelte";
	import Header from "./../components/Header.svelte";
	import type { ChartInfo } from "../types/props/ChartInfo.js";

	let { 
		chartInfo = {
			title: 'Example header',
			desc: 'Example description',
		} as ChartInfo,
	} = $props();

</script>

<Wrapper>
	<Header chartInfo={chartInfo}></Header>
</Wrapper>