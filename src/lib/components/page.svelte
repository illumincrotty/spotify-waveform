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
	<link rel="stylesheet" href="./src/app.postcss" />

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
<header class="stack"><h1>{title}</h1></header>
<main class="stack" style="--gap:{gap}">
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
