<script lang="ts">
	let press = false;
</script>

<button
	on:click
	on:click={() => {
		press = true;
		window.setTimeout(() => {
			press = false;
		}, 100);
	}}
	on:mousedown={() => {
		press = true;
	}}
	on:blur={() => (press = false)}
	on:mouseout={() => (press = false)}
	class="svg-button"
	aria-pressed={press}
>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg
	>
</button>

<style>
	@import '../style/svgButton.postcss';
</style>
