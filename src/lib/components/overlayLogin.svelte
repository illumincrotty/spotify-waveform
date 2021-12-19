<script lang="ts">
	import SpotifyButton from './spotifyButton.svelte';
	import Overlay from './overlay.svelte';
	import { assets } from '$app/paths';
	export let url = `${assets}/generator`;
</script>

<template>
	<Overlay>
		<div class="box">
			<p>You need to connect spotify to access this feature</p>
			<SpotifyButton {url} />
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

		background-color: var(--text);
		color: var(--bg);

		word-break: normal;

		display: flex;
		flex-direction: column;
		text-align: center;
	}
</style>
