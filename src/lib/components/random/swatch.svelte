<script lang="ts">
	export let names = ['#83b9a9', '#B6A6DD', '#c9a97d', '#88b2dc'];
</script>

<ul class="unlist switcher pad">
	{#each names as color, index}
		<li class="pad dark shadow-pop" style="--bg: {color};">
			{names[index].toUpperCase()}
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		text-align: center;
		li {
			background: var(--bg);
			--padding: 0.25rem;
			box-shadow: var(--shadow-elevation-medium);
		}
	}

	/* ul {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1em;
		align-items: center;
		justify-content: space-around;

		& > li {
			font-size: 1em;
			aspect-ratio: 2;
			flex: 2 2;

			min-width: min-content;
			height: 2em;
			color: var(--dark);
			text-align: center;
		}
	} */
</style>
