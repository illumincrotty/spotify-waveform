<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				error: error,
				status: status,
			},
		};
	}
</script>

<script lang="ts">
	import Page from '$lib/components/page.svelte';

	export let status;
	export let error: Error;
</script>

<Page title="ERROR: {status}">
	<div>{error.message}</div>
</Page>

<style>
	div {
		width: fit-content;
	}
</style>
