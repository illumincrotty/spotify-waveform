<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ButtonTheme from '$lib/components/button/buttonTheme.svelte';
	export let links: { href: string; label: string }[] = [];
</script>

<header id="page-top" role="banner" class="center">
	<nav class="switcher">
		<div style="flex-grow: 3">
			<a
				href={`${base}/`}
				id="link-to-base"
				style="display: block; max-width: 2em"
			>
				<img src={`${base}/favicon.svg`} alt="Logo" />
			</a>
		</div>
		<div style="flex-grow: 40;" />
		{#each links as link}
			{#if $page.url.pathname !== `/${link.href}`}
				<div class="shadow-pop">
					<a sveltekit:prefetch href={`${base}/${link.href}`}
						>{link.label}</a
					>
				</div>
			{/if}
		{/each}
		<div class="shadow-pop">
			<ButtonTheme />
		</div>
	</nav>
</header>

<style lang="postcss">
	#link-to-base {
		background: fixed;
		&:hover,
		&:focus-visible {
			outline: 0.2em solid var(--theme);
		}

		&:active {
			outline-color: var(--text);
		}
	}

	a {
		text-decoration: none;
	}
</style>
