<script lang="ts">
	import type { Dimension } from "../types/props/Dimension.js";
	import "./luna.scss";

	let {
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

<svg 
	viewBox={
		dimension.viewBox.minX + ' ' +
		dimension.viewBox.minY + ' ' +
		dimension.viewBox.width + ' ' +
		dimension.viewBox.height
	}
	xmlns="http://www.w3.org/2000/svg"  
	class="flip-verticaly"
>
	<slot></slot>
</svg>

<style></style>
