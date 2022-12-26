import { c as create_ssr_component, d as escape } from "../../../chunks/index.js";
import "../../../chunks/uneval.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-1oaguw1{padding:20px;display:flex;gap:20px;flex-direction:column}label.svelte-1oaguw1{display:block}input.svelte-1oaguw1,textarea.svelte-1oaguw1{display:block;width:100%;background:var(--header-bg);border:3px solid var(--purple);color:var(--white);padding:0.5rem;font-family:var(--heading-font)}button.svelte-1oaguw1{color:var(--white);border:0;width:fit-content;padding:0.5rem 1rem;border-radius:100vw;background:var(--purple)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `
${form?.error_message ? `<p>Oops! ${escape(form?.error_message)}</p>` : ``}


${form?.message ? `<p>${escape(form?.message)}</p>` : `

	<form action="${"/contact?/email"}" class="${"svelte-1oaguw1"}">
		<label class="${"svelte-1oaguw1"}">Name: <input type="${"text"}" required name="${"name"}" id="${"name"}" class="${"svelte-1oaguw1"}"></label>
		<label class="${"svelte-1oaguw1"}">Email: <input type="${"email"}" required name="${"email"}" id="${"email"}" class="${"svelte-1oaguw1"}"></label>
		<label class="${"svelte-1oaguw1"}">Message: <textarea required name="${"message"}" id="${"message"}" class="${"svelte-1oaguw1"}"></textarea></label>
		<button type="${"submit"}" class="${"svelte-1oaguw1"}">Send Email</button></form>`}`;
});
export {
  Page as default
};
