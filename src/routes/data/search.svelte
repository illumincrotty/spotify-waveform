<script lang="ts">
	import Page from '$lib/components/layout/page.svelte';

	import { createSpotifyConnection } from '$lib/script/api';

	import { token } from '$lib/storeSession';
	import { onMount } from 'svelte';

	import SearchSpotify from '$lib/components/searchSpotify.svelte';
	let spotify: ReturnType<typeof createSpotifyConnection>;

	onMount(() => {
		if ($token !== 'empty' && token.valid()) {
			spotify = createSpotifyConnection($token);
		}
	});
</script>

<Page title="Search">
	<SearchSpotify {spotify} />
</Page>
