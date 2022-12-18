<script>
	import { beforeUpdate } from 'svelte';
	import AudioPlayer from '$lib/AudioPlayer.svelte';
	import { current_episode } from '$lib/stores';
	export let data;

	$: ({ episode, user } = data);

	beforeUpdate(() => {
		current_episode.set(episode);
	});
</script>

<article>
	<h1>{episode.title}</h1>

	{@html episode.html}
</article>

<style>
	article {
		padding: 2rem 1rem;
	}
</style>
