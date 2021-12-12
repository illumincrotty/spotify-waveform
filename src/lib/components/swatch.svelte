<script lang="ts">
	export const boxes = 7;
</script>

<ul>
	{#each { length: boxes } as _, index}
		<li style="background: var(--t{index + 1})">
			{(index + 1).toLocaleString()}
		</li>
	{/each}
</ul>

<style lang="postcss">
	ul {
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

			/* height: 4em; */
			min-width: 3em;
			height: 2em;
			color: var(--dark);
			text-align: center;
		}
	}
</style>
