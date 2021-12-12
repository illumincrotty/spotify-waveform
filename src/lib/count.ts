// Import main component
import Counter from './counter.svelte';

// Add target to the main component - HTML body tag
const app = new Counter({
	target: document.getElementById('test-here') as HTMLElement,
});

// Export like a common module
export default app;
