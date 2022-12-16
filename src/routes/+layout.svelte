<script>
	import {} from '$app/environment';
	import { navigating } from '$app/stores';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
	import Episodes from './Episodes.svelte';

	export let data;
	$: ({ all_episodes } = data);
	$: console.log(!!$navigating);
</script>

<Header />

<main>
	{#if $navigating}
		<div class="loading">Loading</div>
	{/if}
	<div class="main">
		<slot />
	</div>
	<aside>
		<Episodes episodes={all_episodes} />
	</aside>
</main>

<Footer />

<style>
	main {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 20px;
	}

	aside {
		order: -1;
	}

	.loading {
		position: fixed;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: blue;
	}
</style>
