<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import Page from '$lib/components/page.svelte';

	import { onMount } from 'svelte';
	import { token } from '$lib/storeSession';
	import { goto } from '$app/navigation';

	onMount(() => {
		$token = 'empty';
		goto('/');
	});
</script>

<Page title="Deauthenticating">
	<div class="center-i">
		<Loader />
	</div>
</Page>
