<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	import '$db/start';
	import './reset.css';
	import './style.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		background: rgb(202, 191, 191);
		padding: 1rem;
	}
</style>
