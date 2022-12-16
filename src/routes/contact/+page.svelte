<script>
	import { enhance } from '$app/forms';

	export let form;
	$: console.log('form', form);
</script>

{#if form && form?.error_message}
	<p>{form.error_message}</p>
{/if}
{#if form && form?.message}
	<p>{form?.message}</p>
{:else}
	<form use:enhance method="POST">
		<label>
			Name: <input type="text" required name="name" id="name" />
		</label>
		<label>
			Email: <input type="email" required name="email" id="email" />
		</label>
		<label>
			Message: <textarea required name="message" id="message" />
		</label>
		<button type="submit">Send Email</button>
	</form>
{/if}

<style>
	form {
		padding: 20px;
		display: flex;
		gap: 20px;
		flex-direction: column;
	}

	label {
		display: block;
	}
</style>
