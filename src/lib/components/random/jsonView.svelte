<script lang="ts">
	import TreeView from 'svelte-tree-view/TreeView.svelte';
	export let data = {};

	const theme = {
		'scheme': 'google',
		'author': 'seth wright (http://sethawright.com)',
		'base00': 'var(--dark)',
		'base01': '#282a2e',
		'base02': '#373b41',
		'base03': '#969896',
		'base04': '#b4b7b4',
		'base05': '#c5c8c6',
		'base06': '#e0e0e0',
		'base07': '#ffffff',
		'base08': 'var(--t3)',
		'base09': 'var(--t4)',
		'base0A': '#FBA922',
		'base0B': 'var(--t1)',
		'base0C': 'var(--t3)',
		'base0D': 'var(--t3)',
		'base0E': 'var(--t4)',
		'base0F': '#3971ED',
		'tree-view-font-size': '3rem',
	};
</script>

<TreeView {theme} {data} />

<style>
	:global(ul.svelte-tree-view:not(#\9)) {
		--tree-view-font-size: 1em;
		width: 100%;
		padding: var(--padding);
		/* max-width: var(--measure); */
	}
</style>
