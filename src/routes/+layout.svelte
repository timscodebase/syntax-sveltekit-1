<script>
	// import { goto } from '$app/navigation';
	// https://github.com/sveltejs/svelte-preprocess
	// lifecycle, afterNavigate, beforeNavigate
	// disableScrollHandling - SvelteKit's built in scroll handling
	// goto => programically routing
	// invalidate -> load functions on active page re-run
	// invalidateAll -> causes all load functions to re-run
	// preloadCode -> load js code for given routes
	// preloadData -> load data from load functions for given routes
	import { env } from '$env/dynamic/public';
	import { PUBLIC_LUT_PUB_KEY } from '$env/static/public';

	import { browser, building, dev, version } from '$app/environment';
	import { navigating } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Episodes from './Episodes.svelte';

	import './reset.css';
	import './styles.css';

	export let data;
	$: ({ all_episodes } = data);
	// browser -> boolean, if app is running in browser
	// dev -> boolean, if in development
	// building -> boolean, true, IF currently build for production
	// version -> config.kit.version.name
</script>

<Header />

<main>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
	<div class="main">
		<slot />
	</div>
</main>

<Footer />

<style lang="postcss">
	main {
		display: flex;
		flex-wrap: wrap;
		max-width: var(--max-width);
		margin: 0 auto;
		background: rgba(0, 0, 0, 0.1);
		border-left: 3px solid var(--grey);
		border-right: 3px solid var(--grey);
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
