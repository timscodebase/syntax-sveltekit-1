<script>
	export let episodes;
	export let current = 0;
</script>

<nav>
	<ul>
		{#each episodes as episode}
			<a href={`/show/${episode.number}`}>
				<li class={current === episode.number ? 'active' : ''}>
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
	.active,
	li:hover {
		font-family: var(--heading-font);
		background: var(--header-bg-bright);
	}

	a {
		cursor: pointer;
		text-decoration: none !important;
	}
</style>
