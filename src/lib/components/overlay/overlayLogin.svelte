<script lang="ts">
	import { onMount, tick } from 'svelte';
	import SpotifyButton from '$lib/components/button/spotifyButton.svelte';

	import OverlayModal from './overlayModal.svelte';

	let loginButton: SpotifyButton;

	onMount(() => {
		tick().then(() => {
			loginButton.focus();
		});
	});
</script>

<OverlayModal labelledby="login_title" describedby="login_description">
	<h2 id="login_title">Unauthorized</h2>
	<p id="login_description">
		You need to connect spotify to access this feature
	</p>
	<SpotifyButton bind:this={loginButton} />
</OverlayModal>
