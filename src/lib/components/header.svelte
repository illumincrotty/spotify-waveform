<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ButtonTheme from './buttonTheme.svelte';
	export let links: { href: string; label: string }[] = [];
	console.log($page.path);
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
			{#if $page.path !== `/${link.href}`}
				<div>
					<a sveltekit:prefetch href={`${base}/${link.href}`}
						>{link.label}</a
					>
				</div>
			{/if}
		{/each}
		<div>
			<ButtonTheme />
		</div>
	</nav>
</header>

<style lang="postcss">
	#link-to-base {
		background: fixed;
		&:hover,
		&:focus-within {
			outline: 0.2em solid var(--theme);
		}

		&:active {
			outline-color: var(--text);
		}
	}
	div {
		pointer-events: painted;
	}
</style>
