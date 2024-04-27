<script lang="ts">
	import Header from "./../components/Header.svelte";
	let {
		heightViewbox = 150,
		widthViewBox = 300,
		width = 100,
		height = 100, 
	} = $props();
</script>

<svg viewBox="0 0 {widthViewBox} {heightViewbox}"  class="svg">
	<g>

	</g>
</svg>

<style>
	.svg {
		border: 2px solid black;
	}
</style>
