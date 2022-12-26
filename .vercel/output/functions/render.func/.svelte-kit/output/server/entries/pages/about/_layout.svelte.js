import { c as create_ssr_component } from "../../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h4>About Layout</h4>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
