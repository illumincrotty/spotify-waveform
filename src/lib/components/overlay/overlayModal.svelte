<script lang="ts">
	import Overlay from './overlay.svelte';
	export let labelledby: string;
	export let describedby: string;

	let modalWindow: HTMLElement;

	const onKeyDown = (ev: KeyboardEvent) => {
		const nodes = modalWindow.querySelectorAll('*');
		const tabbable = Array.from(nodes).filter(
			(node) => ((node as HTMLElement)?.tabIndex ?? -1) >= 0
		) as HTMLElement[];

		let index = tabbable.indexOf(document.activeElement as HTMLElement);
		if (index === -1 && ev.shiftKey) index = 0;

		index += tabbable.length + (ev.shiftKey ? -1 : 1);
		index %= tabbable.length;

		tabbable[index].focus();
		event.preventDefault();

		if (ev.key !== 'Tab') return;
		ev.preventDefault();
	};
</script>

<svelte:window on:keydown={onKeyDown} />

<Overlay>
	<div
		class="middle-box stack"
		role="dialog"
		bind:this={modalWindow}
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
		box-shadow: var(--shadow-elevation-high);
	}
</style>
