<script>
	export let episodes;
</script>

<nav>
	<ul>
		{#each episodes as episode}
			<a href={`/show/${episode.number}`}>
				<li>
					{episode.title}
				</li>
			</a>
		{/each}
	</ul>
</nav>

<style>
	ul {
		list-style: none;
		padding: 0;
		border: 1px solid var(--grey);
		border-right: 3px solid var(--purple);
	}

	li {
		padding: 1rem;
		border-bottom: 1px solid var(--grey);
	}
	li:last-child {
		border-bottom: none;
	}
	li:hover {
		background: var(--header-bg-bright);
	}

	a {
		cursor: pointer;
		text-decoration: none !important;
	}
</style>
