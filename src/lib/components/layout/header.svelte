<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ButtonMode from '$lib/components/button/buttonLightModeDarkMode.svelte';
	import ButtonTheme from '$lib/components/button/buttonTheme.svelte';
	import ButtonMenu from '../button/buttonMenu.svelte';
	export let links: { href: string; label: string }[] = [];
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	let menuOpen = false;
	let classes = ['shadow-pop'];

	onMount(() => (menuOpen = false));
</script>

<header>
	<div style="display: flex; gap:var(--gap);">
		<div id="base-container" style="margin-right: auto;">
			<a href={`${base}/`} id="link-to-base">
				<img
					src={`${base}/favicon.svg`}
					alt="Logo"
					width="36"
					height="36"
				/>
			</a>
		</div>

		<ButtonMode {classes} />
		<ButtonTheme {classes} />
		<ButtonMenu bind:open={menuOpen} {classes} />
	</div>

	{#if menuOpen}
		<nav>
			<ul class="unlist" transition:slide={{ duration: 500 }}>
				<h2>Navigation</h2>

				{#if $page.url.pathname !== `/`}
					<li class="shadow-pop">
						<a sveltekit:prefetch href={`${base}/`}>Home</a>
					</li>
				{/if}
				{#each links as link}
					{#if $page.url.pathname !== `/${link.href}`}
						<li class="shadow-pop">
							<a sveltekit:prefetch href={`${base}/${link.href}`}
								>{link.label}</a
							>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
	{/if}
</header>

<!-- 
<header id="page-top" role="banner" class="center switcher">
	<div id="base-container">
		<a href={`${base}/`} id="link-to-base">
			<img
				src={`${base}/favicon.svg`}
				alt="Logo"
				width="36"
				height="36"
			/>
		</a>
	</div>
	<div style="flex-grow: 40;" />

	<div class="shadow-pop">
		<ButtonMode />
	</div>
	<div class="shadow-pop">
		<ButtonTheme />
	</div>
	<div class="shadow-pop">
		<ButtonMenu />
	</div>
</header> -->
<style lang="postcss">
	header {
		max-width: var(--measure);
		width: 100%;
		margin: var(--gap) auto 0;
	}
	#base-container {
		line-height: 0;
		a {
			display: block;
			background: unset;
			margin-right: auto;
			height: 36px;
			width: 36px;

			&:hover,
			&:focus-visible {
				outline: 0.2em solid var(--theme);
			}

			&:active {
				outline-color: var(--text);
			}
			img {
				margin: none;
			}
		}
	}

	nav {
		background: transparent;
		ul {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1em;
			font-size: 1.25rem;
		}
	}
</style>
