<script>
	import { invalidateAll } from '$app/navigation';
	import { applyAction, deserialize } from '$app/forms';

	export let form;

	// Standard onSubmit event
	async function handleForm(event) {
		// this === form element
		// creating form data
		const data = new FormData(this);
		// Sending our own fetch post request
		const res = await fetch(this.action, {
			method: 'POST',
			body: data
		});

		// Get data by deserializing it
		const result = deserialize(await res.text());

		// See if it was success,
		// if success, reload all loaded data
		if (result.type === 'success') {
			// Reloads all data
			await invalidateAll();
		}

		// populating form
		// will redirect if thrown redirect in action
		// show error page if thrown error
		applyAction(result);
	}
</script>

<!-- Fail -->
{#if form?.error_message}
	<p>
		Oops! {form?.error_message}
	</p>
{/if}

<!-- Success -->
{#if form?.message}
	<p>
		{form?.message}
	</p>
{:else}
	<!-- <form
		use:enhance={({ form, data, action, cancel }) => {
			// form -> form element
			// data -> FormData object
			// action -> url form posts to
			// cancel() -> cancels form
			return ({ result, update }) => {
				update();
				// result -> 'ActionResult'
				// update() -> runs all of the default use:enhance
			};
		}}
		action="/contact?/email"
		method="POST"
	> -->

	<form on:submit|preventDefault={handleForm} action="/contact?/email">
		<!-- Action = route + ?/ + action_name -->
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
	input,
	textarea {
		display: block;
		width: 100%;
		background: var(--header-bg);
		border: 3px solid var(--purple);
		color: var(--white);
		padding: 0.5rem;
		font-family: var(--heading-font);
	}

	button {
		color: var(--white);
		border: 0;
		width: fit-content;
		padding: 0.5rem 1rem;
		border-radius: 100vw;
		background: var(--purple);
	}
</style>
