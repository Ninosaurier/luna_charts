<script lang="ts">
	let {
		heightViewbox = 150,
		widthViewBox = 300,
		width = 100,
		height = 100, 
	} = $props();
</script>

<svg viewBox="0 0 {widthViewBox} {heightViewbox}"  class="svg">
	<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"> Hello World </text>
</svg>

<style>
	.svg {
		border: 2px solid black;
	}
</style>
