<script lang="ts">
	import Overlay from './overlay.svelte';
	export let labelledby: string;
	export let describedby: string;

	const onKeyDown = (ev: KeyboardEvent) => {
		if (ev.key !== 'Tab') return;
		ev.preventDefault();
	};
</script>

<svelte:window on:keydown={onKeyDown} />

<Overlay>
	<div
		class="middle-box stack"
		role="dialog"
		aria-labelledby={labelledby}
		aria-describedby={describedby}
		aria-modal="true"
	>
		<slot />
	</div>
</Overlay>

<style lang="postcss">
	.middle-box {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

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
