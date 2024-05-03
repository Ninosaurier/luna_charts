<script lang="ts">
	import "./luna.scss";

	let {
		heightViewbox = 150,
		widthViewBox = 300,
		width = 100,
		height = 100, 
	} = $props();
</script>

<svg 
	viewBox="0 0 {widthViewBox} {heightViewbox}" 
	xmlns="http://www.w3.org/2000/svg"  
	class="flip-verticaly"
>
	<slot></slot>
</svg>

<style></style>
