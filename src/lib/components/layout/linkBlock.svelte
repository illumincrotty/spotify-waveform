<script lang="ts">
	export let href = '';
	export let id = undefined;
</script>

<a rel="external" {href} {id} role="link" class="card shadow-pop">
	<slot />
</a>
