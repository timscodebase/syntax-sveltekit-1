import { c as create_ssr_component, e as each, b as add_attribute, d as escape, f as null_to_empty, g as subscribe, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index3.js";
import "iconify-icon";
/* empty css                                                      */const current_episode = writable({});
const Header_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "header.svelte-ttnpcc{background:var(--dark-grad);color:#fff;padding:1rem;border-bottom:3px solid var(--purple)}.inner.svelte-ttnpcc{max-width:var(--max-width);margin:0 auto}a.svelte-ttnpcc{color:#fff;font-size:3.5rem;font-family:var(--heading-font);text-decoration:none}a.svelte-ttnpcc:hover{text-decoration:underline}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<header class="${"svelte-ttnpcc"}"><div class="${"inner svelte-ttnpcc"}"><a href="${"/"}" class="${"svelte-ttnpcc"}">Syntax Clone</a></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "footer.svelte-5o88j7{padding:2rem;display:flex;justify-content:space-around;gap:2rem;background:var(--dark-grad);border-top:3px solid var(--purple)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<footer class="${"svelte-5o88j7"}"><a href="${"/contact"}">Contact</a>
	<a href="${"https://www.leveluptutorials.com"}" target="${"_blank"}" rel="${"noopener noreferrer"}">Level Up Tutorials
	</a>
</footer>`;
});
const Episodes_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "ul.svelte-28cbnr{list-style:none;padding:0;border:1px solid var(--grey);border-right:3px solid var(--purple)}li.svelte-28cbnr{padding:1rem;border-bottom:1px solid var(--grey)}li.svelte-28cbnr:last-child{border-bottom:none}.active.svelte-28cbnr,li.svelte-28cbnr:hover{font-family:var(--heading-font);background:var(--header-bg-bright)}a.svelte-28cbnr{cursor:pointer;text-decoration:none !important}",
  map: null
};
const Episodes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episodes } = $$props;
  let { current = 0 } = $$props;
  if ($$props.episodes === void 0 && $$bindings.episodes && episodes !== void 0)
    $$bindings.episodes(episodes);
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css$2);
  return `<nav><ul class="${"svelte-28cbnr"}">${each(episodes, (episode) => {
    return `<a${add_attribute("href", `/show/${episode.number}`, 0)} class="${"svelte-28cbnr"}"><li class="${escape(null_to_empty(current === episode.number ? "active" : ""), true) + " svelte-28cbnr"}">${escape(episode.title)}</li>
			</a>`;
  })}</ul>
</nav>`;
});
const css$1 = {
  code: "#audio-player-container.svelte-6ldyjd.svelte-6ldyjd{--size:100px;--seek-before-width:0%;--volume-before-width:100%;--buffered-width:0%;background:rgba(0, 0, 0, 0.7);position:relative;display:grid;grid-template-columns:var(--size) 1fr 200px;border-bottom:3px solid var(--purple)}button.svelte-6ldyjd.svelte-6ldyjd{--size:80px;padding:0;border:0;background:transparent;cursor:pointer;outline:none}p.svelte-6ldyjd.svelte-6ldyjd{margin:8px 0;padding:0.25rem}.left.svelte-6ldyjd.svelte-6ldyjd,.middle.svelte-6ldyjd.svelte-6ldyjd,.volume.svelte-6ldyjd.svelte-6ldyjd{display:flex;flex-direction:column;justify-content:space-between;align-items:center}.left.svelte-6ldyjd.svelte-6ldyjd{justify-content:space-around}.left.svelte-6ldyjd.svelte-6ldyjd,.middle.svelte-6ldyjd.svelte-6ldyjd{border-right:3px solid var(--purple)}.volume.svelte-6ldyjd span.svelte-6ldyjd{margin-right:2rem}.middle.svelte-6ldyjd p.svelte-6ldyjd,.volume.svelte-6ldyjd p.svelte-6ldyjd{display:inline-block;font-size:1rem;width:100%;padding:0.5rem 1rem;font-family:var(--heading-font)}.play-time.svelte-6ldyjd.svelte-6ldyjd{font-size:0.7rem}output.svelte-6ldyjd.svelte-6ldyjd{display:inline-block;width:32px;text-align:center;font-size:20px}.play.svelte-6ldyjd.svelte-6ldyjd,.pause.svelte-6ldyjd.svelte-6ldyjd{font-size:3rem}.hide.svelte-6ldyjd.svelte-6ldyjd{display:none}#volume-slider.svelte-6ldyjd.svelte-6ldyjd::-webkit-slider-runnable-track{background:var(--dark-purple)}#volume-slider.svelte-6ldyjd.svelte-6ldyjd::-moz-range-track{background:var(--dark-purple)}#volume-slider.svelte-6ldyjd.svelte-6ldyjd::-ms-fill-upper{background:var(--dark-purple)}#volume-slider.svelte-6ldyjd.svelte-6ldyjd::before{width:var(--volume-before-width)}input[type='range'].svelte-6ldyjd.svelte-6ldyjd{position:relative;-webkit-appearance:none;width:100%;margin:0;padding:0;height:24px;outline:none;border-bottom:3px solid var(--purple)}input[type='range'].svelte-6ldyjd.svelte-6ldyjd::-webkit-slider-runnable-track{width:100%;height:21px;cursor:pointer;background:linear-gradient(\n			to right,\n			var(--purple) var(--buffered-width),\n			var(--dark-purple) var(--buffered-width)\n		)}input[type='range'].svelte-6ldyjd.svelte-6ldyjd::before{position:absolute;content:'';top:0px;left:0;width:var(--seek-before-width);height:21px;background:var(--dark-grad);cursor:pointer}input[type='range'].svelte-6ldyjd.svelte-6ldyjd::-webkit-slider-thumb{position:relative;-webkit-appearance:none;box-sizing:content-box;border:1px solid var(--dark-purple);height:24px;width:18px;border-radius:50vw;background-color:var(--white);cursor:pointer;margin:-3px 0 0 7.5px;left:-10px}",
  map: null
};
const AudioPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { title = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  $$result.css.add(css$1);
  return `<div id="${"audio-player-container"}" class="${"svelte-6ldyjd"}"><audio${add_attribute("src", src, 0)} preload="${"metadata"}" loop></audio>
	<button id="${"play_button"}" class="${"left svelte-6ldyjd"}"><iconify-icon class="${"play svelte-6ldyjd"}" icon="${"material-symbols:play-arrow-rounded"}"></iconify-icon>
		<iconify-icon class="${"pause hide svelte-6ldyjd"}" icon="${"material-symbols:pause-rounded"}"></iconify-icon>
		<span class="${"play-time svelte-6ldyjd"}"><span id="${"current-time"}" class="${"time"}">0:00</span>/
			<span id="${"duration"}" class="${"time"}">0:00</span></span></button>

	<div class="${"middle svelte-6ldyjd"}"><input type="${"range"}" class="${"seek-slider svelte-6ldyjd"}" max="${"100"}" value="${"0"}">
		<p class="${"svelte-6ldyjd"}">Playing: ${escape(title)}</p></div>
	<div class="${"volume svelte-6ldyjd"}"><input type="${"range"}" id="${"volume-slider"}" max="${"100"}" value="${"100"}" class="${"svelte-6ldyjd"}">
		<p class="${"svelte-6ldyjd"}"><span class="${"svelte-6ldyjd"}">Volume:</span><output id="${"volume-output"}" class="${"svelte-6ldyjd"}">100</output></p></div>
</div>`;
});
const reset = "";
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1kpm79a,main.svelte-1kpm79a{margin:0 auto;max-width:var(--max-width);border-left:3px solid var(--purple);border-right:3px solid var(--purple)}main.svelte-1kpm79a{display:flex;flex-wrap:wrap;background:rgba(0, 0, 0, 0.1)}.main.svelte-1kpm79a{max-height:100vh;overflow-y:scroll;flex:2}aside.svelte-1kpm79a{max-height:100vh;overflow-y:scroll;width:300px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let all_episodes;
  let src;
  let title;
  let number;
  let $current_episode, $$unsubscribe_current_episode;
  $$unsubscribe_current_episode = subscribe(current_episode, (value) => $current_episode = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ all_episodes } = data);
  {
    current_episode.set(all_episodes[0]);
  }
  src = $current_episode.url;
  title = $current_episode.title;
  number = $current_episode.number;
  $$unsubscribe_current_episode();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${"wrapper svelte-1kpm79a"}">${validate_component(AudioPlayer, "AudioPlayer").$$render($$result, { src, title }, {}, {})}</div>
<main class="${"svelte-1kpm79a"}"><aside class="${"svelte-1kpm79a"}">${validate_component(Episodes, "Episodes").$$render($$result, { episodes: all_episodes, current: number }, {}, {})}</aside>
	<div class="${"main svelte-1kpm79a"}">${slots.default ? slots.default({}) : ``}</div></main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
