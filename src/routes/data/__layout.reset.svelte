<script lang="ts">
	import { goto } from '$app/navigation';

	import { base } from '$app/paths';
	import { refreshToken } from '$lib/authentication';

	import Header from '$lib/components/header.svelte';
	import OverlayLogin from '$lib/components/overlayLogin.svelte';
	import { token } from '$lib/storeSession';
	import { onMount } from 'svelte';
	import type { pkceToken } from 'tokens';
	export const title = 'Example';

	let mounted = false;

	onMount(() => {
		if ($token !== 'empty') {
			asyncMount($token);
		}
		mounted = true;
	});

	const asyncMount = async (input: pkceToken) => {
		if (input.expires_at < Date.now()) {
			const freshToken = await refreshToken(input);
			if (freshToken) {
				$token = freshToken;
			} else {
				$token = 'empty';
				goto(`${base}`);
			}
		}
	};
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.png" />
	<link rel="icon" href="{base}/favicon.svg" type="image/svg+xml" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header
	links={[
		{ href: '', label: 'Home' },
		{ href: 'data', label: 'Data' },
		{ href: 'data/top', label: 'Top Data' },
	]}
/>

{#if mounted && $token === 'empty'}
	<OverlayLogin />
{/if}
<slot>
	<!-- <main class="stack center-i" id="page-main" /> -->
</slot>

<style lang="postcss" global>
	@import '$lib/style/cssReset.postcss';
	@import '$lib/style/el.postcss';
	@import '$lib/style/base.postcss';
</style>
