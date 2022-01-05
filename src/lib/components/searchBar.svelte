<script lang="ts">
	/**
	 * Specify the input value
	 */
	export let value = '';
	/**
	 * Specify the debounce value in milliseconds (ms)
	 */
	export let debounce = 500;

	export let label = 'search';
	export let placeholder = 'Search... ';
	export let fontSize: 's' | 'm' | 'l' | 'xl' | '2xl' = 'xl';
	export let showMagnifyingGlass = true;

	/**
	 * `id` for the `input`
	 */
	export let id = 'search' + Math.random().toString(36);
	/**
	 * Obtain a reference to the `input` element
	 */
	export let ref: HTMLInputElement = null;

	import { createEventDispatcher, afterUpdate } from 'svelte';
	import ButtonPlus from './button/buttonPlus.svelte';
	const dispatch = createEventDispatcher();
	let prevValue = value;

	let timer = 0;

	const debounceFn = (fn) => {
		window.clearTimeout(timer);
		timer = window.setTimeout(() => {
			fn();
		}, debounce);
	};

	afterUpdate(() => {
		if (value.length > 0 && value !== prevValue) {
			if (debounce > 0) {
				debounceFn(() => dispatch('type', value));
			} else {
				dispatch('type', value);
			}
		}
		if (value.length === 0 && prevValue.length > 0) dispatch('clear');
		prevValue = value;
	});

	const clear = () => {
		value = '';
	};
</script>

<form
	role="search"
	on:submit|preventDefault
	class="center-i"
	class:content={value.length > 0}
>
	<label id="{id}-label" for={id}> {label} </label>
	{#if showMagnifyingGlass}
		<svg
			focusable="false"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			aria-hidden="true"
			><path
				d="M15,14.3L10.7,10c1.9-2.3,1.6-5.8-0.7-7.7S4.2,0.7,2.3,3S0.7,8.8,3,10.7c2,1.7,5,1.7,7,0l4.3,4.3L15,14.3z M2,6.5	C2,4,4,2,6.5,2S11,4,11,6.5S9,11,6.5,11S2,9,2,6.5z"
			/></svg
		>
	{/if}

	<input
		bind:this={ref}
		name="search"
		type="search"
		{placeholder}
		autocomplete="off"
		spellcheck="false"
		{id}
		bind:value
		on:input
		on:change
		on:focus
		on:blur
		on:keydown
		style="font-size: var(--font-{fontSize});"
	/>
	{#if value}
		<ButtonPlus
			rotate={45}
			circle={false}
			buttonLabel="clear input"
			svgLabel="X"
			on:click={clear}
		/>
	{/if}
</form>

<style lang="postcss">
	form {
		max-width: calc(var(--measure) - (var(--padding) * 2));
		width: 100%;
		position: relative;
		flex-direction: row;
		svg {
			position: absolute;
			left: 0;
			top: 0;
			padding: 0.25em;

			height: 2em;
		}

		/* background: var(--theme); */
		background-color: var(--overlay);
		/* color: var(--anti-overlay); */
		width: 0%;
		border: 0.1em solid var(--bg);
		border-bottom-color: var(--text);
		min-width: 18em;
		transition: all 0.1s, width 0.3s ease-in-out;
		text-align: center;

		&.content {
			background-color: var(--bg) / 30%;
			color: var(--text);
		}

		&:focus-within,
		&.content {
			border: 0.1em solid;
			outline: none;
			width: 100%;
			text-align: center;
			color: var(--text);
		}
		&:focus-within {
			outline: none;
			color: var(--text);
			background-color: transparent;
			border-color: var(--theme);
		}
	}

	input[type='search'] {
		display: inline-block;
		border: none;
		background: transparent;
		text-align: center;
		width: 100%;
		color: inherit;
		padding-left: 2em;
		padding-right: 2em;
		&:focus {
			outline: none;
		}
	}
	label {
		position: absolute;
		height: 1px;
		width: 1px;
		overflow: hidden;
		color: var(--text);
		background: none;
		clip: rect(1px 1px 1px 1px);
		clip: rect(1px, 1px, 1px, 1px);
		white-space: nowrap;
	}
</style>
