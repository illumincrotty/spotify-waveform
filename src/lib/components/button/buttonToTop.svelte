<script lang="ts">
	import Button from './buttonBase.svelte';

	export let visible = false;

	const clickHandler = () => {
		scrollTo({ top: 0 });
	};
</script>

<div style="visibility: {visible ? 'visible' : 'hidden'};">
	<Button
		on:click={clickHandler}
		buttonLabel="To Top"
		svgLabel="arrow up"
		circle={true}
	>
		<path
			d="M12.929.545A1.09 1.09 0 0011.043.54l-9.53 16.361a1.088 1.088 0 00.942 1.639h18.989a1.09 1.09 0 00.944-1.637L12.928.544z"
		/>
	</Button>
</div>

<style>
	div {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		background-color: transparent;
	}
</style>
