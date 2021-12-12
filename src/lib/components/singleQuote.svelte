<!-- <script lang="ts" context="module">
	export async function load({ page, fetch, session, stuff }) {
		const res = await fetch('https://api.quotable.io/random');

		if (res.ok) {
			return {
				props: {
					article: await res.json(),
				},
			};
		}

		return {
			status: res.status,
		};
	}
</script> -->
<script lang="ts">
	export const typewriter = true;
	async function getRandomQuote() {
		const res = await fetch(`https://api.quotable.io/random`);
		const json = await res.json();

		if (res.ok) {
			return json;
		} else {
			throw new Error(json);
		}
	}

	let promise = getRandomQuote();

	// onMount(() => {});
</script>

<div>
	{#await promise then quote}
		<figure class="stack" style="--gap:1em">
			<blockquote>
				<span
					class:type={typewriter}
					style="--n:{quote.content.length}"
				>
					{quote.content}
				</span>
			</blockquote>
			<figcaption>- {quote.author}</figcaption>
		</figure>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

<style>
	div {
		padding-left: 0;
	}
	blockquote {
		padding: 0;
		text-align: left;
	}
	figcaption {
		text-align: right;
		font-style: italic;
	}

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
</style>
