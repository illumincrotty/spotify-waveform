<script lang="ts">
	import { base } from '$app/paths';

	import Page from '$lib/components/layout/page.svelte';
</script>

<Page title="Random">
	<div class="center-i">
		<ul class="unlist">
			<li>
				<a href="{base}/random/quotes"
					>Quotes - A collection of quotes</a>
			</li>
			<li>
				<a href="{base}/random/words"
					>Random Words - A random word generator</a>
			</li>
			<li>
				<a href="{base}/random/graph"
					>Example graphs - a collection of graphs</a>
			</li>
		</ul>
	</div>
</Page>
