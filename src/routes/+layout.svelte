<script>
	import { current_episode } from '$lib/stores';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Episodes from './Episodes.svelte';
	import AudioPlayer from '$lib/AudioPlayer.svelte';

	import './reset.css';
	import './styles.css';

	export let data;
	$: ({ all_episodes } = data);
	$: current_episode.set(all_episodes[0]);

	$: src = $current_episode.url;
	$: title = $current_episode.title;
	$: number = $current_episode.number;
</script>

<Header />

<div class="wrapper">
	<AudioPlayer {src} {title} />
</div>
<main>
	<aside>
		<Episodes episodes={all_episodes} current={number} />
	</aside>
	<div class="main">
		<slot />
	</div>
</main>

<Footer />

<style lang="postcss">
	.wrapper,
	main {
		margin: 0 auto;
		max-width: var(--max-width);
		border-left: 3px solid var(--purple);
		border-right: 3px solid var(--purple);
	}

	main {
		display: flex;
		flex-wrap: wrap;
		background: rgba(0, 0, 0, 0.1);
	}

	.main {
		max-height: 100vh;
		overflow-y: scroll;
		flex: 2;
	}

	aside {
		max-height: 100vh;
		overflow-y: scroll;
		width: 300px;
	}
</style>
