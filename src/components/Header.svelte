<script lang="ts">
	import type { ChartInfo } from '../types/props/ChartInfo.js';
	import './../core/luna.scss';

	let {
		chartInfo = {
			title: 'Test',
			desc: 'Test'
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
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<text
		bind:this={titleTextElement}
		class="flip-text-verticaly header-title"
		dominant-baseline="middle"
		text-anchor="middle"
		x="50%"
		y="96%"
		role="heading"
		tabindex="0"
		aria-level={headerLevelRole}
	>
		{chartInfo.title}
	</text>
	<foreignobject
		class="flip-text-verticaly flip-verticaly header-desc-wrapper"
		y="74%"
		width="100%"
		height="15%"
	>
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<p class="header-desc" tabindex="0">
			{@html chartInfo.desc}
		</p>
	</foreignobject>
</g>

<style lang="scss" type="text/scss">
	$luna-header-title-fill-color: #000;
	$luna-header-title-font-size: unset;

	$luna-header-desc-fill-color: #000;
	$luna-header-desc-font-size: 0.3em;

	.header-title {
		fill: $luna-header-title-fill-color;
		font-size: $luna-header-title-font-size;
	}

	.header-desc {
		fill: $luna-header-desc-fill-color;
		font-size: $luna-header-desc-font-size;
		margin: 0 6px;
	}

	.header-desc-wrapper {
		overflow: visible;
		text-align: justify;
  	text-justify: inter-word;
	}
</style>
