<script lang="ts">
	import Button from './buttonBase.svelte';
	export let buttonLabel = 'Add Additional Content';
	export let svgLabel = 'plus';
	export let circle = true;
	export let rotate = 0;
</script>

<Button {buttonLabel} {svgLabel} {circle} on:click>
	<path
		d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
		style="transform-origin: 50% 50%; transform: rotate({rotate}deg)"
	/>
</Button>
