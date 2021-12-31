<script lang="ts">
	export let data: number[] = [];
	export let label = 'Chart';
	const width = 4,
		space = 1,
		mod = 1,
		height = 100;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 {Math.ceil(
		(data.length / mod) * (width + space) - space
	)} {height}"
	fill-rule="evenodd"
	clip-rule="evenodd"
	stroke-linejoin="round"
	stroke-miterlimit="2"
	aria-label={label}
>
	{#each data as value, index}
		{#if index % mod === 0}
			<rect
				x={(index / mod) * (width + space)}
				y={height / 2 - (height * value) / 2}
				{width}
				height={height * value}
				rx="2"
			/>
		{/if}
	{/each}
</svg>
