<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();
	export let name = 'select';
	export let id = 'example';
	export let placeHolder: string | number | undefined = undefined;
	export let options: { label: string; value: string }[];
	let ignoreBlur = false;

	let activeIndex = placeHolder
		? typeof placeHolder === 'string'
			? -1
			: placeHolder
		: 0;
	let menuOpen = false;
	let highlightIndex = -1;

	$: {
		if (activeIndex >= 0 && activeIndex < options.length)
			dispatch('change', options[activeIndex]);
	}

	const onBlur = (): void => {
		if (ignoreBlur) {
			ignoreBlur = false;
			return;
		}
		if (menuOpen && !ignoreBlur) {
			menuOpen = false;
		}
	};
	const onKeyDown = (event: KeyboardEvent) => {
		if (menuOpen) {
			switch (event.key) {
				case ' ':
				case 'Enter':
					event.preventDefault();
					activeIndex = highlightIndex;
					menuOpen = false;
					break;
				case 'ArrowUp': {
					event.preventDefault();
					if (highlightIndex - 1 >= 0) {
						highlightIndex -= 1;
					}
					break;
				}
				case 'Tab': {
					if (event.shiftKey) {
						event.preventDefault();
						if (highlightIndex - 1 >= 0) {
							highlightIndex -= 1;
						}
						break;
					}
				}
				case 'ArrowDown': {
					event.preventDefault();
					if (highlightIndex + 1 < options.length) {
						highlightIndex += 1;
					}
					break;
				}
				case 'Escape':
					event.preventDefault();
					menuOpen = false;
					break;
				default:
					break;
			}
		} else {
			switch (event.key) {
				case 'ArrowUp':
				case 'ArrowDown':
				case ' ':
				case 'Enter':
					event.preventDefault();
					menuOpen = true;
					highlightIndex = activeIndex;
					break;
				default:
					break;
			}
		}
	};
</script>

<template>
	<label for={id} id="{id}-label" class="ds-label"> {name} - </label>
	<div
		class="ds-main ds-select"
		{id}
		on:click|stopPropagation|preventDefault={() => {
			highlightIndex = -1;
			menuOpen = !menuOpen;
		}}
		on:blur|capture|preventDefault|stopPropagation={onBlur}
		on:keydown={onKeyDown}
		class:open={menuOpen}
	>
		<span
			aria-controls="listbox"
			aria-haspopup="listbox"
			role="combobox"
			tabindex="0"
			class="ds-input"
			aria-activedescendant="{id}-option-{highlightIndex >= 0
				? highlightIndex
				: activeIndex}"
		>
			{activeIndex !== -1 ? options[activeIndex].label : placeHolder}
			<!-- <svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 448 512"
			class="svelte-c8tyih"
			><path
				d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
			/></svg
		> -->
		</span>
		<div
			role="listbox"
			tabindex="-1"
			class="ds-menu"
			class:open={menuOpen}
			id="{id}-menu"
			aria-expanded={menuOpen}
			on:mousedown={() => {
				ignoreBlur = true;
			}}
			on:mouseup={() => {
				ignoreBlur = false;
			}}
		>
			{#each options as option, index}
				<div
					value={option.value}
					aria-selected="true"
					role="option"
					class="ds-option"
					class:option-current={highlightIndex === index}
					id="{id}-option-{index}"
					on:click={() => {
						if (activeIndex !== index) {
							activeIndex = index;
						}
					}}
				>
					{option.label}
				</div>
			{/each}
		</div>
	</div>
</template>

<style lang="postcss">
	/* svg {
		display: inline-block;
		width: 0.8em;
		stroke: var(--text);
	} */
	.ds-main *,
	.ds-main *::before,
	.ds-main *::after {
		box-sizing: border-box;
	}

	.ds-main {
		display: inline-block;
		position: relative;
		width: fit-content;
		position: relative;
		outline: none;
		/* text-decoration-skip-ink: none; */
		/* text-decoration-skip: edges;
		text-decoration: solid underline 0.1em; */
		/* border-bottom: solid var(--text) 0.1em; */

		/* cursor: pointer; */
		cursor: context-menu;
	}
	.ds-main::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 0.1em;
		border-bottom: solid var(--text) 0.1em;
		top: 1.1em;
		left: 0;
		transition: border-bottom-width 0.2s, background-color 0.2s;
	}

	.ds-main:hover,
	.ds-main:focus-visible,
	.ds-main:focus-within,
	.ds-main:active,
	.ds-main:focus,
	.ds-main:target {
		background-color: hsla(0, 100%, 100%, 0.1);

		&::after {
			border-bottom-width: 0.2em;
		}
	}

	.ds-input {
		outline: none;
		display: block;
		min-height: calc(1.4em);
		text-align: left;
		width: max-content;
		padding-left: 0.5ch;
		padding-right: 0.5ch;
	}

	.ds-label {
		display: inline-block;
	}

	.ds-menu {
		border: 0.1em solid var(--text);
		display: none;
		right: 0;
		position: absolute;
		top: 100%;
		text-align: right;
		width: max-content;
		z-index: 100;
	}

	.open .ds-menu {
		display: flex;
		flex-direction: column;
		background-color: var(--bg);
	}

	.ds-option {
		padding: 0.2em 0.5em;
	}

	.ds-option:hover,
	.ds-option:focus,
	.ds-option:target,
	.ds-option.option-current {
		background-color: rgb(255 255 255 / 10%);
	}

	.ds-option[aria-selected='true'] {
		color: inherit;
		/* text-decoration: underline; */
	}
</style>
