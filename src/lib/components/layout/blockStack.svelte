<script lang="ts">
	import { blurDesaturate } from '$lib/script/transitions';

	export let transitionDuration = 750;
	export let limit = 0;
	export let limitButton = false;

	export let id = (Math.random() * 10).toString(32);

	export let component;
	export let items = [];
</script>

{#key items}
	<ol
		class="unlist"
		style="gap:--2rem"
		aria-expanded={limit === 0}
		in:blurDesaturate={{
			duration: transitionDuration,
			delay: transitionDuration,
		}}
		out:blurDesaturate={{
			duration: transitionDuration,
		}}
		{id}
	>
		<slot name="start-of-list" />
		{#each items as item, index (item.uri)}
			{#key limit}
				{#if limit === 0 || index < limit}
					<li>
						<svelte:component this={component} data={item} />
					</li>
				{/if}
			{/key}
		{/each}
		{#if limitButton && items.length > limit}
			<button
				class="shadow-pop"
				aria-controls={id}
				on:click={() => {
					limit = limit === 0 ? 5 : 0;
				}}
				aria-label="Expand or Contract List"
			>
				Show {limit === 0 ? 'Less' : 'More'}
			</button>
		{/if}

		<slot name="end-of-list" />
	</ol>
{/key}

<style lang="postcss">
	ol {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: calc(var(--padding) / 2);
		flex-wrap: wrap;
	}
	button {
		box-shadow: var(--shadow-elevation-medium);
	}
</style>
