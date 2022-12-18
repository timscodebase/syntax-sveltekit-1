<script>
	import AudioPlayer from '$lib/AudioPlayer.svelte';
	export let data;

	$: ({ episode, user } = data);
	$: src = episode.url;
</script>

<AudioPlayer {src} />
<article>
	<h1>{episode.title}</h1>

	{@html episode.html}
</article>

<style>
	article {
		padding: 2rem 1rem;
	}
</style>
