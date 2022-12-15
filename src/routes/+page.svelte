<script>
	export let data;

	$: ({ latest_episode, all_episodes } = data);
</script>

<!-- {JSON.stringify(latest_episode, null, 2)} -->

<h2>{latest_episode.title}</h2>

<nav>
	<ul>
		{#each all_episodes as episode}
			<li>
				<a href={`/show/${episode.number}`}>{episode.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	a {
		text-decoration: underline;
		cursor: pointer;
	}
</style>
