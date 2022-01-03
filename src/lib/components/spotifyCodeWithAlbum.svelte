<script lang="ts">
	export let uri;
	export let size = 800;
</script>

<img
	src={`https://scannables.scdn.co/uri/${size}/spotify:${uri}`}
	alt="Spotify Scannable link"
/>
