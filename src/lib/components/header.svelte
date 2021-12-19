<script lang="ts">
	import { assets } from '$app/paths';
	export let links: { href: string; label: string }[] = [];
</script>

<header id="page-top" role="banner">
	<nav class="switcher">
		<div style="flex-grow: 40;">
			<a href="/">
				<img
					src={`${assets}/favicon.svg`}
					alt="Logo"
					style="height: 2rem;"
				/>
			</a>
		</div>
		{#each links as link}
			<div>
				<a href={link.href}>{link.label}</a>
			</div>
		{/each}
	</nav>
</header>
