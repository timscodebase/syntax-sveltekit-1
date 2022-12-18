<script>
	import { navigating, page, updated, getStores } from '$app/stores';
	import Test from '$lib/Test.svelte';
	import AudioPlayer from '$lib/AudioPlayer.svelte';
	import '$db/start';
	export let data;

	$: ({ latest_episode } = data);
	// const { latest_episode } = data;
	$: src = latest_episode.url;
</script>

<AudioPlayer {src} />
<article>
	<h1>{latest_episode.title}</h1>

	{@html latest_episode.html}
</article>

<style>
	article {
		padding: 2rem 1rem;
	}
</style>
