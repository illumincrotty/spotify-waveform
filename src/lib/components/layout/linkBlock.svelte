<script lang="ts">
	export let href = '';
	export let id = undefined;
</script>

<a rel="external" {href} {id} role="link" class="card shadow-pop">
	<slot />
</a>

<style lang="postcss">
	.card {
		display: flex;
		background: var(--overlay);
		padding: calc(var(--padding) / 2);
		align-items: center;

		min-height: 3rem;

		/* aspect-ratio: 1; */
		text-decoration: none;
		gap: var(--padding);
		color: var(--text);

		&:hover,
		&:focus-within {
			outline: 0.2rem solid var(--theme);
		}
	}
</style>
