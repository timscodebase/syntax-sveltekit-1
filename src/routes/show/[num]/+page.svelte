<script>
	export let data;

	$: ({ episode } = data);
</script>

<h2>{episode.title}</h2>

<div class="episode">
	{@html episode.html}
</div>
