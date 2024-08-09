<script lang="ts">
	import type { ChartInfo } from "../types/props/ChartInfo.js";
	import type { Dimension } from "../types/props/Dimension.js";
	import Axis from "../components/Axis.svelte";
	import type { Labels } from "../types/props/Labels.js";
	import { writable } from "svelte/store";
	import { setContext } from "svelte";
	import Bars from "./../components/series/Bars.svelte";
	import Header from "../components/Header.svelte";
	import Wrapper from "../components/Wrapper.svelte";
	import ChartSetting from "../core/ChartSetting.svelte";

	type Props = {
		labels: Labels;
		chartInfo: ChartInfo;
		dimension: Dimension;
	}

	let { 
		labels = {
			xAxis: {
				name: "X-Axis",
				minValue: 0,
				maxValue: 0
			},
			leftYAxis: {
				name: "Left y-Axis",
				minValue: 0,
				maxValue: 0
			},
			rightYAxis: {
				name: "",
				minValue: 0,
				maxValue: 0
			}
		} as Labels,
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
	<ChartSetting>
		<Header chartInfo={chartInfo}></Header>
		<Axis labels={labels} ></Axis>
	</ChartSetting>
</Wrapper>
