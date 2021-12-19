<script lang="ts">
	import { base } from '$app/paths';
	import ButtonTheme from './buttonTheme.svelte';
	export let links: { href: string; label: string }[] = [];
</script>

<header id="page-top" role="banner" class="pad">
	<nav class="switcher">
		<div style="flex-grow: 40;">
			<a href={`${base}/`} id="link-to-base">
				<img
					src={`${base}/favicon.svg`}
					alt="Logo"
					style="height: 2rem;"
				/>
			</a>
		</div>
		{#each links as link}
			<div>
				<a sveltekit:prefetch href={`${base}/${link.href}`}
					>{link.label}</a
				>
			</div>
		{/each}
		<div>
			<ButtonTheme
				on:click={() => {
					console.log('theme switch');
				}}
			/>
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
	}
	div {
		pointer-events: painted;
	}
</style>
