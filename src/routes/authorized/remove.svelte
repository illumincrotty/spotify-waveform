<script lang="ts">
	import { onMount } from 'svelte';
	import { token } from '$lib/storeSession';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Page from '$lib/components/layout/page.svelte';
	import Loader from '$lib/components/loading/loader.svelte';

	onMount(() => {
		$token = 'empty';
		goto(`${base}/`);
	});
</script>

<Page title="Deauthenticating">
	<div class="center-i">
		<Loader />
	</div>
</Page>
