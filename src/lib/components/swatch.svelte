<script lang="ts">
	export let names = [
		'#00A485',
		'#6397AE',
		'#8B86D6',
		'#AB6DFF',
		'#d166c7',
		'#e86190',
		'#F65D5A',
	];
</script>

<ul>
	{#each names as color, index}
		<li style="background: {color}">
			{names[index].toUpperCase()}
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
			min-width: min-content;
			height: 2em;
			color: var(--dark);
			text-align: center;
		}
	}
</style>
