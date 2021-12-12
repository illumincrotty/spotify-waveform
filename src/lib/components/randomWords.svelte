<script lang="ts">
	export let count = 1;
	async function getRandomWord() {
		const res = await fetch(
			`https://random-word-api.herokuapp.com/word?number=${count}`
		);
		const json = await res.json();

		if (res.ok) {
			return json;
		} else {
			throw new Error(json);
		}
	}

	let wordListPromise = getRandomWord();

	// onMount(() => {});
</script>

{#await wordListPromise}
	<li>Loading...</li>
{:then words}
	{#each words as word}
		<li>{word}</li>
	{/each}
{:catch error}
	<li>
		<p style="color: red">{error.message}</p>
	</li>
{/await}
<!-- 
<style>
	.type {
		@media (prefers-reduced-motion: no-preference) {
			font-family: monospace;
			color: #0000;
			--caretWidth: 0.1ch;
			--caretOffset: 0.1ch;
			--caretBlinkRate: 1s;
			--textRevealRate: 0.1s;
			background: linear-gradient(
						-90deg,
						var(--text) var(--caretWidth),
						#0000 0
					)
					var(--caretOffset) 0,
				linear-gradient(var(--text) 0 0) 0 0;
			background-size: calc(var(--n) * 1ch) 200%;
			-webkit-background-clip: padding-box, text;
			background-clip: padding-box, text;
			background-repeat: no-repeat;

			animation: bgAnimate var(--caretBlinkRate) infinite steps(1),
				textAnimate calc(var(--n) * var(--textRevealRate))
					steps(var(--n)) forwards;
		}
	}
	@keyframes textAnimate {
		from {
			background-size: 0 200%;
		}
	}
	@keyframes bgAnimate {
		50% {
			background-position: 0 -100%, 0 0;
		}
	}
</style> -->
