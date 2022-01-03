<script lang="ts">
	import { onMount, tick } from 'svelte';
	import SpotifyButton from '$lib/components/button/spotifyButton.svelte';

	import Overlay from './overlay.svelte';

	let loginButton: SpotifyButton;

	onMount(() => {
		tick().then(() => {
			loginButton.focus();
		});
	});

	const onKeyDown = (ev: KeyboardEvent) => {
		// console.debug(ev.key);

		if (ev.key !== 'Tab') return;
		loginButton.focus();

		ev.preventDefault();
	};
</script>

<svelte:window on:keydown={onKeyDown} />

<Overlay>
	<div
		class="box stack"
		role="dialog"
		aria-labelledby="login_title"
		aria-describedby="login_description"
		aria-modal="true"
	>
		<h2 id="login_title">Unauthorized</h2>
		<p id="login_description">
			You need to connect spotify to access this feature
		</p>
		<SpotifyButton bind:this={loginButton} />
	</div>
</Overlay>

<style lang="postcss">
	.box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		border-radius: 1rem;
		width: clamp(16rem, 33%, 50%);
		padding: 1em;

		background-color: var(--bg);
		color: var(--text);

		word-break: normal;

		display: flex;
		flex-direction: column;
		text-align: center;
	}
</style>
