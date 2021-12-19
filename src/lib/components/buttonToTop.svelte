<script lang="ts">
	const clickHandler = () => {
		toTop();
		clicked = true;
		press = true;
	};
	const toTop = () => {
		scrollTo({ top: 0, behavior: 'smooth' });
	};
	let clicked = false;
	let press = false;
</script>

<button
	on:click={clickHandler}
	on:mousedown={(e) => {
		press = true;
	}}
	on:blur={() => {
		press = false;
	}}
	on:mouseout={() => {
		press = false;
	}}
	class="svg-button"
	class:clicked
	aria-pressed={press}
>
	<svg
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		fill-rule="evenodd"
		clip-rule="evenodd"
		stroke-linejoin="round"
		stroke-miterlimit="2"
		><path
			d="M12.929.545A1.09 1.09 0 0011.043.54l-9.53 16.361a1.088 1.088 0 00.942 1.639h18.989a1.09 1.09 0 00.944-1.637L12.928.544z"
		/></svg
	>
</button>

<style>
	@import '../style/svgButton.postcss';
	button {
		position: fixed;
		bottom: 3em;
		right: 3em;
		border-radius: 50%;
	}
</style>
