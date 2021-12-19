<script lang="ts">
	import { onMount } from 'svelte';

	import LoadingBoxes from './loadingBoxes.svelte';
	import LoadingDots from './loadingDots.svelte';
	import LoadingSpinner from './loadingSpinner.svelte';
	import Overlay from './overlay.svelte';

	export let symbol: 'spinner' | 'boxes' | 'dots' = 'spinner';
</script>

<Overlay>
	<section>
		<div>
			{#if symbol === 'spinner'}
				<p>Loading</p>

				<LoadingSpinner size="5rem" />
			{:else if symbol === 'boxes'}
				<p>Loading</p>
				<LoadingBoxes size="5rem" />
			{:else if symbol === 'dots'}
				<LoadingDots size="5rem" />
			{/if}
		</div>
	</section>
</Overlay>

<style lang="postcss">
	section {
		background-color: unset;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		text-align: center;
		color: var(--theme);
		/* fill: ; */
		p::after {
			content: '...';
		}
	}
</style>
