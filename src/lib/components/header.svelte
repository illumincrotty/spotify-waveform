<script lang="ts">
	import { base } from '$app/paths';
	export let links: { href: string; label: string }[] = [];
</script>

<header id="page-top" role="banner">
	<nav class="switcher">
		<div style="flex-grow: 40;">
			<a href={`${base}/`}>
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
	</nav>
</header>
