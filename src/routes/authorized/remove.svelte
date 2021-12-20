<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import Page from '$lib/components/page.svelte';

	import { onMount } from 'svelte';
	import { token } from '$lib/storeSession';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	onMount(() => {
		$token = 'empty';
		goto(`${base}`);
	});
</script>

<Page title="Deauthenticating">
	<div class="center-i">
		<Loader />
	</div>
</Page>
