<script>
	import Nav from '$lib/Nav.svelte';
</script>

<header>
	<h1>Syntax Fun</h1>
	<Nav />
</header>

<style>
	:global(body) {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}
	header {
		background: var(--light-blue);
		color: #fff;
		padding: 1em;
	}
</style>
