import { c as create_ssr_component, d as escape } from "../../../../chunks/index.js";
import "iconify-icon";
/* empty css                                                            */const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-11qd9iy{padding:2rem 1rem}.content.svelte-11qd9iy{padding:1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let episode;
  let user;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ episode, user } = data);
  return `<article class="${"svelte-11qd9iy"}"><div class="${"content svelte-11qd9iy"}"><h1>${escape(episode.title)}</h1>

		<!-- HTML_TAG_START -->${episode.html}<!-- HTML_TAG_END --></div>
</article>`;
});
export {
  Page as default
};
