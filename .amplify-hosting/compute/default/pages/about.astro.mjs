/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_gx1bWz4I.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://studio10b.com");
const $$HeroAbout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroAbout;
  const {
    title,
    subtitle,
    backgroundImage = "/images/projects-bg.jpg",
    category,
    client,
    year,
    filterCategories = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[70vh] min-h-[600px] flex items-end text-white"> <!-- Background Image --> <div class="absolute inset-0 -z-10"> <img${addAttribute(backgroundImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"> </div> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 -z-10"></div> <!-- Content Container --> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl pb-16"> <div class="max-w-xl"> <h1 class="text-4xl md:text-5xl font-bold mb-4">${title}</h1> <p class="text-xl opacity-80 mb-6">${subtitle}</p> <!-- Project Details Pills (conditionally rendered) --> ${(category || client || year) && renderTemplate`<div class="flex flex-wrap gap-4 mt-8"> ${category && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">${category}</span> </div>`} ${client && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">Client: ${client}</span> </div>`} ${year && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">Year: ${year}</span> </div>`} </div>`} <!-- Filter Categories (if provided) --> ${filterCategories.length > 0 && renderTemplate`<div class="mt-12"> <h2 class="text-2xl font-bold mb-6">Filter by Category</h2> <div class="flex flex-wrap gap-4"> ${filterCategories.map((category2, index) => renderTemplate`<button class="filter-btn py-2 px-6 text-base rounded border border-gray-200 hover:bg-gray-100 hover:text-black transition-all duration-300 data-[pressed=true]:bg-black data-[pressed=true]:text-white data-[pressed=true]:border-black"${addAttribute(category2, "data-category")}${addAttribute(index === 0 ? "true" : "false", "data-pressed")}> ${category2} </button>`)} </div> </div>`} </div> </div> </section> ${renderScript($$result, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroAbout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroAbout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About Us - Studio 10b" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroAbout, { "title": "About Studio 10b", "subtitle": "Crafting Immersive Virtual Environments Since 2020", "backgroundImage": "/images/about-bg.jpg" })} ${maybeRenderHead()}<section class="py-24"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="grid md:grid-cols-2 gap-16 mb-20"> <div> <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2> <p class="text-lg mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p class="text-lg mb-6 leading-relaxed">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <h2 class="text-3xl md:text-4xl font-bold mt-10 mb-6">Our Approach</h2> <p class="text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="order-first md:order-last"> <img src="/images/about-team.jpg" alt="Studio 10b Team" class="w-full h-auto rounded-lg shadow-2xl"> </div> </div> <div class="pt-10 border-t border-gray-200"> <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="bg-gray-50 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"> <div class="text-5xl mb-4">🔮</div> <h3 class="text-xl font-semibold mb-4">Innovation</h3> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> </div> <div class="bg-gray-50 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"> <div class="text-5xl mb-4">⚡</div> <h3 class="text-xl font-semibold mb-4">Performance</h3> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> </div> <div class="bg-gray-50 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"> <div class="text-5xl mb-4">🎨</div> <h3 class="text-xl font-semibold mb-4">Creativity</h3> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> </div> <div class="bg-gray-50 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"> <div class="text-5xl mb-4">🚀</div> <h3 class="text-xl font-semibold mb-4">Exploration</h3> <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> </div> </div> </div> </div> </section> ` })}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/about.astro", void 0);

const $$file = "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
