<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import Page from '$lib/components/page.svelte';

	import { onMount } from 'svelte';
	import { token } from '$lib/storeSession';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { verify } from '$lib/authentication';
	import { base } from '$app/paths';

	onMount(() => {
		if ($token !== 'empty') {
			console.log('already exists');
			console.log($token);
			// goto('/data', { replaceState: true });
		}
		asyncMount();
	});

	const asyncMount = async () => {
		const code = $page.query.get('code');
		const state = $page.query.get('state');
		if (!code) return { status: 302, redirect: `${base}/` };
		if (!state) return { status: 302, redirect: `${base}/` };

		if (code && state) {
			const response = await verify(code, state, fetch);
			if (response.ok) {
				const json = await response.json();
				if (!json?.access_token) goto('');
				// return { status: 412, error: 'Missing Access Token' };
				if (!json?.refresh_token) goto('');
				// return { status: 412, error: 'Missing Refresh Token' };
				if (!json?.expires_in) goto('');
				// return { status: 412, error: 'Missing Expiration' };
				token.set({
					access_token: json.access_token,
					refresh_token: json.refresh_token,
					expires_at: Date.now() + 1000 * +json.expires_in,
				});

				console.log('Good');
				console.log($token);
				goto('data', { replaceState: true });
			} else {
				goto('');
			}
		}
		goto('');
	};
</script>

<Page title="Authenticating">
	<div class="center-i">
		<Loader />
	</div>
</Page>
