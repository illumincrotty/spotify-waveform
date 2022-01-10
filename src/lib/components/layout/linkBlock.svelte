<script lang="ts">
	export let href = '';
	export let id = undefined;
</script>

<a {href} {id} class="card shadow-pop">
	<slot />
</a>
