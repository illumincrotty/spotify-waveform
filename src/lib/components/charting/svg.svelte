<template>
	<div>
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
</style>
