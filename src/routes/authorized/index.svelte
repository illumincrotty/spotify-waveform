<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { verify } from '$lib/authentication';
	import { base } from '$app/paths';

	export const load: Load = async ({ page, fetch, session, stuff }) => {
		if (browser) {
			const code = page.query.get('code');
			const state = page.query.get('state');
			if (!code) return { status: 302, redirect: `${base}/` };
			if (!state) return { status: 302, redirect: `${base}/` };

			if (code && state) {
				const response = await verify(code, state, fetch);
				if (response.ok) {
					const json = await response.json();
					if (!json?.access_token)
						return { status: 412, error: 'Missing Access Token' };
					if (!json?.refresh_token)
						return { status: 412, error: 'Missing Refresh Token' };
					if (!json?.expires_in)
						return { status: 412, error: 'Missing Expiration' };

					return {
						status: 200,
						props: {
							token_prop: {
								access_token: json.access_token,
								refresh_token: json.refresh_token,
								expires_at:
									Date.now() + 1000 * +json.expires_in,
							},
						},
					};
				} else {
					return {
						status: response.status,
						error: response.statusText,
					};
				}
			}
			return { status: 200 };
		}

		return { status: 200 };
	};
</script>

<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import Page from '$lib/components/page.svelte';

	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import { token } from '$lib/storeSession';
	import { goto } from '$app/navigation';

	export let token_prop = undefined;
	export let status = undefined;

	onMount(() => {
		if ($token) {
			goto('data', { replaceState: true });
		}
		if (token_prop) {
			$token = token_prop;
			goto('data', { replaceState: true });
		}
		goto('');
	});
</script>

<Page title="Authenticating">
	{#if status}
		<div>{status}</div>
	{/if}
	<div class="center-i">
		<Loader />
	</div>
</Page>
