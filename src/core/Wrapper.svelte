<script lang="ts">
  import type { Snippet } from "svelte";

	import type { Dimension } from "../types/props/Dimension.js";
	import "./luna.scss";

  type Props = {
    children : Snippet;
    dimension: Dimension;
  }

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
  } : Props = $props();
</script>

<svg 
	id="barChart"
	viewBox={
		dimension.viewBox.minX + ' ' +
		dimension.viewBox.minY + ' ' +
		dimension.viewBox.width + ' ' +
		dimension.viewBox.height
	}
	xmlns="http://www.w3.org/2000/svg"  
	class="flip-verticaly"
>
	
	{@render children()}
</svg>

<style>
	#barChart {
		background-color: grey;
	}
</style>
