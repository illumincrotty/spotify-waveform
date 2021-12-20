<script lang="ts">
	import Loader from '$lib/components/loader.svelte';
	import Page from '$lib/components/page.svelte';

	// Framework Utilities
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	// Stores
	import { token } from '$lib/storeSession';

	// Functions
	import { verify } from '$lib/authentication';

	onMount(() => {
		if ($token !== 'empty') {
			console.log('already exists');
			console.log($token);
			goto(`${base}/data`);
		} else {
			asyncMount();
		}
	});

	const failure = ({
		status,
		error,
		redirect,
	}: {
		status: number;
		error: string;
		redirect?: string;
	}): void => {
		// console.log(`${status}: ${error}`);

		const acutal_redirect = redirect ?? `${base}/`;
		// console.log(acutal_redirect);
		goto(acutal_redirect);
	};

	const asyncMount = async () => {
		const search = new URLSearchParams(window.location.search);
		const code = search.get('code');
		const state = search.get('state');
		if (!code)
			return failure({
				status: 302,
				error: 'Missing Code Data',
			});
		if (!state)
			failure({
				status: 302,
				error: 'Missing State Data',
			});

		const response = await verify(code, state);
		if (response.ok) {
			const json = await response.json();
			if (!json?.access_token)
				failure({ status: 412, error: 'Missing Access Token' });
			// return { status: 412, error: 'Missing Access Token' };
			if (!json?.refresh_token)
				failure({ status: 412, error: 'Missing Refresh Token' });

			// return { status: 412, error: 'Missing Refresh Token' };
			if (!json?.expires_in)
				failure({ status: 412, error: 'Missing Expiration' });

			// return { status: 412, error: 'Missing Expiration' };
			token.set({
				access_token: json.access_token,
				refresh_token: json.refresh_token,
				expires_at: Date.now() + 1000 * +json.expires_in,
			});

			console.log('Debug: 200');
			console.log($token);
			goto(`${base}/data`);
		} else {
			console.log('1');
			failure({ status: 404, error: 'response not ok' });
		}

		failure({ status: 404, error: 'Unknown Error' });
	};
</script>

<Page title="Authenticating">
	<div class="center-i">
		<Loader />
	</div>
</Page>
