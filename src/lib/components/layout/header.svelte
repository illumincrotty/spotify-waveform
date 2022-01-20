<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ButtonMode from '$lib/components/button/buttonLightModeDarkMode.svelte';
	import ButtonTheme from '$lib/components/button/buttonTheme.svelte';
	import ButtonMenu from '../button/buttonMenu.svelte';
	export let links: { href: string; label: string }[] = [];
	import { slide } from 'svelte/transition';
	import { tweened } from 'svelte/motion';
	import { backIn, backOut } from 'svelte/easing';

	let menuOpen = false;
	let classes = ['shadow-pop'];

	let navSize = 0;

	const expandTween = tweened(0, { duration: 200 });
	const collapseTween = tweened(0, { duration: 200 });
	const toggleFade = () => {
		expandTween.update((val) => (val ? 0 : 1));
		collapseTween.update((val) => (val ? 0 : 1));
	};
</script>

<header>
	<div>
		<a
			href={`${base}/`}
			id="link-to-base"
			style="margin-right: auto;"
			class="shadow-pop">
			<img
				src={`${base}/favicon.svg`}
				alt="Logo"
				width="36"
				height="36" />
		</a>

		<ButtonMode {classes} />
		<ButtonTheme {classes} />
		<ButtonMenu bind:open={menuOpen} {classes} on:click={toggleFade} />
	</div>
	<nav
		style="height: {Math.max(
			menuOpen ? navSize * $expandTween : navSize * $collapseTween,
			1
		)}px;">
		<ul class="unlist" transition:slide bind:clientHeight={navSize}>
			<h2>Navigation</h2>

			{#if $page.url.pathname !== `/`}
				<li class="shadow-pop">
					<a
						sveltekit:prefetch
						href={`${base}/`}
						on:click={() => {
							menuOpen = false;
							toggleFade();
						}}>Home</a>
				</li>
			{/if}
			{#each links as link}
				{#if $page.url.pathname !== `/${link.href}`}
					<li class="shadow-pop">
						<a
							sveltekit:prefetch
							href={`${base}/${link.href}`}
							on:click={() => {
								menuOpen = false;
								toggleFade();
							}}>
							{link.label}
						</a>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
</header>

<style lang="postcss">
	header {
		max-width: var(--measure);
		width: 100%;
		margin: var(--gap) auto 0;
		background: transparent;
	}
	div {
		display: flex;
		gap: var(--gap);
		align-items: center;
		margin-bottom: var(--gap);
	}
	#link-to-base {
		&:hover,
		&:focus-visible {
		}
	}
	div a {
		display: block;
		background: transparent;
		margin-right: auto;
		border: 0.1rem solid transparent;

		&:hover,
		&:focus-visible {
			border-color: var(--theme);
		}

		&:active {
		}
		img {
			margin: none;
			width: 2em;
			height: 2em;
		}
	}

	nav {
		overflow-y: hidden;
		ul {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1em;
			font-size: 1.25rem;
			padding: var(--padding);
			margin-top: 0;
			padding-top: 0;
		}
	}
</style>
