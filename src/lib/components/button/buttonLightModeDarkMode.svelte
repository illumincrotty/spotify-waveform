<script lang="ts">
	import { themeDark } from '$lib/storeSession';
	import { onMount } from 'svelte';

	import Button from './buttonBase.svelte';
	export let classes = [];

	let root: HTMLElement;

	const switchTheme = () => {
		$themeDark = !$themeDark;
	};

	const updateStyle = (state: boolean) => {
		root && root.setAttribute('color-scheme', state ? 'dark' : 'light');
	};

	onMount(() => {
		root = document.documentElement;

		if (typeof $themeDark == 'undefined') {
			$themeDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
		}
		updateStyle($themeDark);
	});

	$: updateStyle($themeDark);
</script>

<Button
	buttonLabel="Toggle light mode or dark mode"
	svgLabel="Light Bulb"
	{classes}
	on:click={() => {
		// const compStyle = window.getComputedStyle(document.documentElement);
		// console.log(compStyle.getPropertyValue('--invert'));
		// document.documentElement.style.setProperty(
		// 	'--invert',
		// 	`${
		// 		Number.parseInt(compStyle.getPropertyValue('--invert'), 10) ===
		// 		0
		// 			? '100%'
		// 			: '0%'
		// 	}`
		// );

		// $themeFlip = !$themeFlip;
		// console.log($themeFlip);
		// document.documentElement.classList.toggle('theme-flip');

		switchTheme();
	}}>
	<path
		d="M6.507 16.127A8.983 8.983 0 013 9c0-4.966 4.033-9 9-9 4.966 0 9 4.034 9 9 0 2.9-1.374 5.481-3.507 7.126l.003.003c-.996 1.038-.996 1.038-.996 2.83h-9c0-1.791 0-1.791-.996-2.83l.003-.003zm9.835-.962c-.667.702-.96 1.106-1.132 1.598-.07.198-.119.416-.152.695H8.941a3.132 3.132 0 00-.151-.695c-.173-.493-.465-.896-1.132-1.598a1.513 1.513 0 00-.235-.225A7.49 7.49 0 014.5 9c0-4.14 3.36-7.5 7.5-7.5 4.14 0 7.5 3.36 7.5 7.5a7.49 7.49 0 01-2.923 5.94 1.513 1.513 0 00-.235.225z" />
	<path
		d="M16.5 17.5h-9v3.841c0 1.468 1.237 2.66 2.761 2.66h3.478c1.523 0 2.761-1.192 2.761-2.66V17.5zM15 19v2.341c0 .656-.58 1.16-1.261 1.16H10.26C9.582 22.5 9 21.996 9 21.34V19h6z" />
</Button>
