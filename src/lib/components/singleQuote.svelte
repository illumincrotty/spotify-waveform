<script lang="ts">
	import TypewriterComponent from 'svelte-typewriter';

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
</script>

<template>
	{#await promise then quote}
		{#if typewriter}
			<TypewriterComponent cursor="var(--text)" cascade={true}>
				<blockquote>
					<p>
						{quote.content}
					</p>
					<p class="author">{quote.author}</p>
				</blockquote>
			</TypewriterComponent>
		{:else}
			<blockquote>
				<p>
					{quote.content}
				</p>
				<p class="author">{quote.author}</p>
			</blockquote>
		{/if}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</template>

<style lang="postcss">
	blockquote {
		padding: 0;
		text-align: left;
	}
	.author {
		text-align: right;
		&::before {
			content: '- ';
		}
	}

	p {
		margin-top: 0;
		margin-bottom: 0;
	}

	/* figcaption {
		text-align: right;
		font-style: italic;
	} */

	/* .type {
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
	} */
</style>
