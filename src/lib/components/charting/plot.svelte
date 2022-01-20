<template>
	<div class="plot">
		<slot />
	</div>
</template>

<style lang="postcss">
	div {
		grid-area: center;
		width: 100%;
		height: 100%;
		overflow: visible;
		isolation: isolate;
		position: relative;
	}
	svg {
		grid-area: center;
		pointer-events: none;
		width: 100%;
		height: 100%;
		overflow: visible;
		isolation: isolate;
		position: absolute;
		left: 0;
	}
</style>
