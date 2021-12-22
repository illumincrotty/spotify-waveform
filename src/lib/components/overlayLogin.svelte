<script lang="ts">
	import SpotifyButton from './spotifyButton.svelte';
	import Overlay from './overlay.svelte';
</script>

<template>
	<Overlay>
		<div class="box stack">
			<p>You need to connect spotify to access this feature</p>
			<SpotifyButton />
		</div>
	</Overlay>
</template>

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
