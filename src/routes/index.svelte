<script lang="ts">
	import Page from '$lib/components/page.svelte';
	import SpotifyButton from '$lib/components/spotifyButton.svelte';
	import Swatch from '$lib/components/swatch.svelte';
</script>

<svelte:head><title>Spotify Waveforms</title></svelte:head>

<svelte:body />
<Page title="Spotify Data">
	<div>
		<h2>Theme:</h2>
		<Swatch />
		<p class="centered">
			A simple tool to generate artwork based off spotify tracks. Lorem
			ipsum dolor sit amet consectetur adipisicing elit. Asperiores, non
			praesentium minus consequatur, commodi iste tempora laborum eos nisi
			eveniet officiis ab doloribus error in, soluta neque. Totam, nihil
			enim. Mollitia, nobis quis hic ut eaque fugiat animi repellat saepe
			officiis, quidem officia repudiandae corporis non numquam tempore.
			Et quam repudiandae laudantium reiciendis nihil a, numquam inventore
			error aspernatur recusandae voluptas ratione consequatur dolores ab
			soluta sit tempore, quasi vel amet maiores labore odio? Itaque
			delectus sequi aliquam eius quibusdam libero porro molestiae nihil
			repellendus, est voluptate, officia blanditiis recusandae aliquid
			eaque fuga ipsa consequatur hic iure numquam sapiente tempore.
		</p>
	</div>

	<SpotifyButton slot="main-bottom" />
	<div slot="footer" />
</Page>

<style lang="postcss">
</style>
