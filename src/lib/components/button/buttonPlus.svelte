<script lang="ts">
	import Button from './buttonBase.svelte';
</script>

<Button
	buttonLabel="Add Additional Content"
	svgLabel="plus"
	on:click
	circle={true}
>
	<path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
</Button>
