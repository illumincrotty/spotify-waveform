<script lang="ts">
	import TopButton from '$lib/components/button/buttonToTop.svelte';
	import Swatch from '$lib/components/random/swatch.svelte';
	export let title = 'Placeholder';
	let normalize: HTMLLinkElement;
	function nornmalizeLoaded() {
		normalize.rel = 'stylesheet';
	}
	let y = 0;
</script>

<svelte:head>
	<!-- CSS modern normalize
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/modern-normalize@1.1.0/modern-normalize.min.css"
	/> -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
	<title>{title}</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<slot name="header">
	<header class="dark contrast">
		<h1 class="stack">{title}</h1>
	</header>
</slot>

<main class="center stack pad" id="page-main">
	<slot>
		<h2>Theme Colors</h2>
		<Swatch />
		<p class="box">
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
	<TopButton visible={y > 50} />
</main>
<footer>
	<slot name="footer" />
</footer>

<style>
	header {
		padding: 2ch;
		box-shadow: var(--shadow-elevation-high);
	}
	footer {
		padding: 3ch;
	}
</style>
