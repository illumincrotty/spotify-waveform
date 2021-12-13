<script lang="ts">
	import TopButton from '$lib/components/toTop.svelte';
	import { afterUpdate, beforeUpdate, onMount } from 'svelte';
	import Swatch from './swatch.svelte';
	export let title = 'Example';
	let normalize: HTMLLinkElement;
	function nornmalizeLoaded() {
		normalize.rel = 'stylesheet';
		// normalize.
	}
	let y = 0;
	export let gap: string = '';
</script>

<svelte:head>
	<!-- CSS modern normalize -->
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<svelte:window bind:scrollY={y} />
<svelte:body />
<header class="stack" id="page-top"><h1>{title}</h1></header>
<main class="stack" style="--gap:{gap}" id="page-main">
	<slot>
		<Swatch />
		<p id="test-paragraph">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
			voluptas maiores dicta exercitationem nihil quae enim similique
			porro esse corporis rem quisquam, illum quaerat alias tenetur illo
			vitae dignissimos natus nobis quasi ipsa eum eveniet repellendus
			suscipit. Quam aspernatur voluptate minus vitae temporibus animi
			eius soluta doloremque earum quae ea molestiae, quia quod inventore,
			dolorem facere asperiores quis ipsam odit? Quas atque esse libero
			doloribus nobis vel quo id itaque, dignissimos nam suscipit deleniti
			magni ratione repellendus beatae repudiandae. Optio odio eveniet
			provident ab iste vitae illum illo exercitationem maxime impedit
			debitis porro assumenda, magnam fugiat molestiae necessitatibus quas
			nihil.
		</p>
	</slot>
	{#if $$slots['main-2']}
		<!-- This <hr> and slot will render only if a slot named "description" is provided. -->
		<slot name="main-2" />
	{/if}
	{#if y > 50}
		<TopButton />
	{/if}
</main>
<footer>WIP</footer>

<style lang="postcss" global>
	:root {
		width: 100%;
		height: max(100%, max-content);
		scroll-behavior: smooth;

		/* colors */
		/* #00A485 --*/
		/* #6397AE */
		/* #8B86D6 */
		/* #AB6DFF --*/
		/* #d166c7 */
		/* #e86190 */
		/* #F65D5A --*/

		--dark: #262626;
		--light: #fcddf2;
		--green: #00a485;
		--purple: #ab6dff;
		--red: #f65d5a;

		--t1: var(--green);
		--t2: #6397ae;
		--t3: #8b86d6;
		--t4: var(--purple);
		--t5: #d166c7;
		--t6: #e86190;
		--t7: var(--red);

		--text: var(--light);
		--bg: var(--dark);

		--font-ratio: 1.618;
		--font-ratio-2: 1.2;

		/* --font-m: calc(0.8em + 0.5vmin); */

		--font-minimum-size: 16;
		--font-maximum-size: 21;
		--font-minimum-size-pixels: calc(var(--font-minimum-size) * 1px);
		--font-m: calc(
			var(--font-minimum-size-pixels) +
				(var(--font-maximum-size) - var(--font-minimum-size)) *
				((100vw - 320px) / (1280 - 300))
		);
		/* --font-l: calc(var(--font-m) * var(--font-ratio));
	--font-xl: calc(var(--font-l) * var(--font-ratio)); */
		--font-2xl: calc(
			var(--font-m) * var(--font-ratio) * var(--font-ratio) *
				var(--font-ratio)
		);

		--font-s: calc(var(--font-m) / var(--font-ratio-2));
		/* --font-xs: calc(var(--font-s) / var(--font-ratio-2)); */
		background: var(--bg);
		color: var(--text);
		fill: var(--text);

		@media (prefers-color-scheme: light) {
			--text: var(--dark);
			--bg: var(--light);
		}
		@media (prefers-reduced-motion: reduce) {
			scroll-behavior: auto;
		}
	}

	.stack {
		& > * {
			margin-top: var(--gap, 2.25rem);
			margin-bottom: 0;
			margin-left: auto;
			margin-right: auto;
		}
	}
	/* 
	.cols {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: baseline;
		gap: 1em;
		/* column-gap: 2em; 

		& > * {
			flex: 0.5 0.5;
			min-width: max-content;
		}
	} */

	.centered {
		display: block;
		margin-left: auto;
		margin-right: auto;
	}

	body {
		font-family: 'Atkinson Hyperlegible', sans-serif;

		display: grid;
		grid-template-columns:
			minmax(1rem, 1fr) minmax(200px, 66rem)
			minmax(1rem, 1fr);
		grid-template-rows: min-content 1fr min-content;

		grid-template-areas:
			'lHeader header rHeader'
			'leftSidebar main rightSidebar'
			'footer footer footer';

		height: 100vh;
		width: 100%;
		padding: 0;
		margin: 0;
		overflow-wrap: break-word;
		word-wrap: break-word;
		line-break: loose;
		font-size: var(--font-m);
		text-align: start;
	}

	header {
		text-align: center;
		grid-area: header;
		margin-top: 0;
	}
	h1 {
		margin: 0;
		font-size: var(--font-2xl);
	}
	p {
		line-height: 1.8;
	}
	main {
		grid-area: main;
		width: 100%;
	}

	footer {
		text-align: center;
		grid-area: footer;
		padding-top: 1em;
		padding-bottom: 1em;
	}

	a {
		color: currentColor;
		text-decoration: underline;
	}
	a:hover,
	a:focus-visible {
		outline: none;
		text-decoration: underline 0.2em;
		text-decoration-skip: none;
		text-decoration-skip-ink: none;
	}

	ul {
		list-style: none;
		padding-left: unset;
		line-height: 1.8;
		/* & > li {
		font-size: calc(1em / var(--font-ratio));
	} */
	}
	button {
		border-radius: 1em;
		font: unset;
		color: unset;
		border: none;
	}
</style>
