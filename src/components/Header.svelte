<script lang="ts">
	import type { ChartInfo } from '../types/props/ChartInfo.js';
	import './../core/luna.scss';

	let {
		chartInfo = {
			title: '',
			desc: '',
			source: ''
		} as ChartInfo
	} = $props();

	let headerLevelRole: number = $state(0);
	let titleTextElement: SVGTextElement;

	$effect(() => {
		headerLevelRole = getHeaderRole();
	});

	function findHigherHeader(startNode: SVGTextElement): number {
		let parent: HTMLElement = startNode.parentElement as HTMLElement;
		let resultHeader = 0;

		while (parent !== null && parent.tagName !== 'HTML' && resultHeader === 0) {
			const nodes = Array.from(parent.children);

			for (let index = nodes.length - 1; index >= 0; index -= 1) {
				if (nodes[index].tagName.toLowerCase().match('h1|h2|h3|h4|h5|h6') && resultHeader === 0) {
					resultHeader = parseInt(nodes[index].tagName[1], 10);
				}
			}

			parent = parent.parentElement as HTMLElement;
		}

		// At least, return aria-level 1
		resultHeader += 1;

		return resultHeader;
	}

	function getHeaderRole(): number {
		return findHigherHeader(titleTextElement);
	}
</script>
<g>
	<title>{chartInfo.title}</title>
	<desc>{chartInfo.desc}</desc>
	<text
		bind:this={titleTextElement}
		class="flip-text-verticaly header-title"
		dominant-baseline="middle"
		text-anchor="middle"
		x="50%"
		y="95%"
		role="heading"
		tabindex="0"
		aria-level={headerLevelRole}
	>
		{chartInfo.title}
	</text>
	<foreignobject class="flip-text-verticaly flip-verticaly" y="70%" width="100%" height="15%">
		<p class="header-desc" tabindex="0">
			{@html chartInfo.desc}
		</p>
	</foreignobject>
</g>

<style lang="scss" type="text/scss">
	$luna-header-fill-color: #000;
	$luna-header-font-size: unset;

	$luna-desc-fill-color: #000;
	$luna-desc-font-size: 0.3em;

	.header-title {
		fill: $luna-header-fill-color;
		font-size: $luna-header-font-size;
	}

	.header-desc {
		fill: $luna-desc-fill-color;
		font-size: $luna-desc-font-size;
	}
</style>
