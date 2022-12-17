<script>
	export let episodes;
</script>

<nav>
	<ul>
		{#each episodes as episode}
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		padding: 0;
		border: 1px solid var(--grey);
	}

	li {
		padding: 1rem;
		border-bottom: 1px solid var(--grey);
	}
	li:last-child {
		border-bottom: none;
	}
</style>
