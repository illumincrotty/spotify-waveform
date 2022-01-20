<script>
	import { browser } from '$app/env';
	import { generateID } from '$lib/script/stateGen';

	export const id = browser ? generateID() : 'item';
</script>

<symbol {id} viewBox="-1 -1 2 2">
	<circle cx="0" cy="0" r="1" tabindex="0" />
</symbol>

<style lang="postcss">
	symbol {
		overflow: visible;
	}
	circle {
		transform: translate(-50%, -50%);
		transition: all 0.3s;
	}
</style>
