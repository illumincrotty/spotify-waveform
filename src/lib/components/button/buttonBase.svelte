<script lang="ts">
	let press = false;
	export let buttonLabel: string;
	export let svgLabel: string;
	export let width = '2em';
	export let circle = false;
	export let classes = [];
</script>

<button
	on:click
	on:mousedown={() => {
		press = true;
	}}
	on:blur={() => (press = false)}
	on:mouseout={() => (press = false)}
	aria-pressed={press}
	aria-label={buttonLabel}
	class="svg-button {classes.join(' ')}"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill-rule="evenodd"
		clip-rule="evenodd"
		stroke-linejoin="round"
		stroke-miterlimit="2"
		aria-label={svgLabel}
		style="width:{width}"
		class:svg-circle={circle}
	>
		<slot>
			<path
				d="M6.507 16.127A8.983 8.983 0 013 9c0-4.966 4.033-9 9-9 4.966 0 9 4.034 9 9 0 2.9-1.374 5.481-3.507 7.126l.003.003c-.996 1.038-.996 1.038-.996 2.83h-9c0-1.791 0-1.791-.996-2.83l.003-.003zm9.835-.962c-.667.702-.96 1.106-1.132 1.598-.07.198-.119.416-.152.695H8.941a3.132 3.132 0 00-.151-.695c-.173-.493-.465-.896-1.132-1.598a1.513 1.513 0 00-.235-.225A7.49 7.49 0 014.5 9c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.49 7.49 0 01-2.923 5.94 1.513 1.513 0 00-.235.225z"
			/>
			<path
				d="M16.5 17.5h-9v3.841c0 1.468 1.237 2.66 2.761 2.66h3.478c1.523 0 2.761-1.192 2.761-2.66V17.5zM15 19v2.341c0 .656-.58 1.16-1.261 1.16H10.26C9.582 22.5 9 21.996 9 21.34V19h6z"
			/>
		</slot>
	</svg>
</button>

<style lang="postcss">
	.svg-button {
		border: none;
		padding: 0;
		background: none;
		color: var(--text);
		transition: all 0.3s;
		aspect-ratio: 1;

		&:focus-visible,
		&:hover {
			outline: none;
			color: var(--dark);

			svg {
				background-color: var(--theme);
			}
		}
		&:active {
			color: var(--bg);
			svg {
				background-color: var(--text);
			}
		}
		svg {
			min-width: 2rem;
			aspect-ratio: 1;
			vertical-align: middle;
			padding: 0.25em;
			background-color: transparent;
			transition: inherit;
			fill: currentColor;
		}
	}
</style>
