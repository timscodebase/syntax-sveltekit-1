import { c as create_ssr_component, d as escape } from "../../chunks/index.js";
import "iconify-icon";
/* empty css                                                      */console.log("Starting database...");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "article.svelte-uaecq0{padding:2rem 1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let latest_episode;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ latest_episode } = data);
  latest_episode.url;
  return `
<article class="${"svelte-uaecq0"}"><h1>${escape(latest_episode.title)}</h1>

	<!-- HTML_TAG_START -->${latest_episode.html}<!-- HTML_TAG_END -->
</article>`;
});
export {
  Page as default
};
