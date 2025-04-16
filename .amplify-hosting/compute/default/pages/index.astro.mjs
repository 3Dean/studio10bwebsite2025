/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_gx1bWz4I.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Button } from '../chunks/Button_az6TwUfl.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://studio10b.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    subtitle,
    ctaText = "View Projects",
    ctaLink = "#featured-project",
    // Changed default to anchor link
    ctaTarget = "featured-project",
    // Added default target ID
    skyboxUrl = "/images/skybox.jpg"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="hero-container" class="relative h-screen min-h-[700px] text-white flex items-center"${addAttribute(skyboxUrl, "data-skybox-url")}> <!-- Three.js container with higher z-index than previously --> <div id="skybox-container" class="absolute inset-0 z-5"></div> <!-- Content container - apply pointer-events-none to text only --> <div class="container relative z-20 mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="max-w-2xl"> <!-- Apply pointer-events-none to text elements only --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight pointer-events-none">${title}</h1> <p class="text-lg md:text-xl mb-10 opacity-90 pointer-events-none">${subtitle}</p> ${ctaText && renderTemplate`<a${addAttribute("#" + ctaTarget, "href")} class="bg-black hover:bg-gray-800 text-white font-regular py-3 px-6 rounded-full transition duration-300 ease-in-out border-2 border-gray-300 inline-block"> ${ctaText} </a>`} </div> </div> <!-- Interactive prompt --> <!--  --><div class="absolute bottom-4 left-0 right-0 text-center text-white text-opacity-70 text-sm animate-pulse z-20 pointer-events-none"> <p>Click and drag to explore the 360° environment</p> </div> <!-- Debug overlay to show when scene is clicked --> <div id="debug-info" class="absolute top-4 right-4 bg-black/50 p-2 text-white text-sm z-30 hidden">
Scene clicked
</div> </section> ${renderScript($$result, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://studio10b.com");
const $$FeaturedProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturedProject;
  const {
    title,
    subtitle,
    description,
    imageUrl,
    demoUrl = "#",
    showButton = true,
    buttonText = "View Demo",
    buttonUrl = "https://main.d35yh5sp49i51n.amplifyapp.com"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gray-100"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="flex flex-col md:flex-row items-center gap-12"> <div class="w-full md:w-1/2"> <div class="text-4xl text-symbols mb-4">&#10604;</div> <h2 class="text-4xl md:text-5xl font-extrabold mb-4">${title}</h2> <h3 class="text-xl text-gray-600 mb-6">${subtitle}</h3> <p class="text-gray-500 mb-8">${description}</p> ${renderComponent($$result, "Button", $$Button, { "href": buttonUrl, "variant": "roundwhite" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div> <div class="w-full md:w-1/2"> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="w-full h-auto rounded-lg shadow-xl" loading="lazy"> <div class="w-[60px] h-0.5 bg-gray-300 ml-auto mt-4"></div> <!-- <p class="mt-8 text-gray-400 text-right">&#x268C;</p> --> </div> </div> </div> </section>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/FeaturedProject.astro", void 0);

const $$Astro$1 = createAstro("https://studio10b.com");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, imageUrl, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-2"> <a${addAttribute(url, "href")} class="block text-white no-underline"> <div class="relative h-0 pb-[66.67%] overflow-hidden"> <!-- 3:2 aspect ratio --> <img${addAttribute(imageUrl, "src")}${addAttribute(title, "alt")} class="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div> <div class="flex justify-between items-center py-6"> <h3 class="md:text-xs sm:text-base font-medium m-0">${title}</h3> </div> </a> <div class="w-[100px] h-px bg-gray-800 border-t border-gray-700 mt-auto"></div> </div>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro("https://studio10b.com");
const $$ProjectGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectGrid;
  const {
    title,
    description,
    projects,
    showButton = true,
    buttonText = "View Demo",
    buttonUrl = "/projects"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-900 text-white py-24"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="grid grid-cols-1 md:grid-cols-4 gap-8"> <!-- Title and Description Column --> <div class="md:col-span-1"> <div> <h2 class="text-4xl font-bold mb-4">${title}</h2> <p class="text-sm opacity-80 leading-relaxed mb-8">${description}</p> ${showButton && renderTemplate`<div> ${renderComponent($$result, "Button", $$Button, { "href": buttonUrl, "variant": "roundwhite" }, { "default": ($$result2) => renderTemplate`${buttonText}` })} </div>`} </div> </div> <!-- Project Cards - 3 columns --> ${projects.map((project, index) => renderTemplate`<div class="md:col-span-1"> ${renderComponent($$result, "ProjectCard", $$ProjectCard, { "title": project.title, "imageUrl": project.imageUrl, "url": `/projects/${project.slug}` })} </div>`)} </div> </div> </section>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/ProjectGrid.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const featuredProject = {
    subtitle: "A testbed for physics, shaders, and real-time rendering.",
    description: "Step into a browser-based immersive world crafted with Three.js, where interactive lighting effects, ambient music, and dynamic particles come together to create a rich sensory experience. This tech demo showcases the potential of real-time WebGL environments \u2014 blending art, atmosphere, and interactivity. At its heart lies a virtual art gallery, where users can explore creative works in a space that feels alive, responsive, and thoughtfully designed. Every detail \u2014 from reactive lighting to floating particles \u2014 is engineered to pull the viewer deeper into the narrative of the space.",
    imageUrl: "/images/featured-project.jpg"
  };
  const environmentProjects = [
    {
      id: "1",
      title: "An immersive, walkable 3D environment designed to educate and engage guests",
      imageUrl: "/images/env-project-1.jpg",
      slug: "marketing-environment"
    },
    {
      id: "2",
      title: "A 3D room for hosting live radio broadcasts and engaging with guests",
      imageUrl: "/images/env-project-2.jpg",
      slug: "videogame-gallery"
    },
    {
      id: "3",
      title: "An immersive, walkable 3D environment designed to educate and engage guests",
      imageUrl: "/images/env-project-3.jpg",
      slug: "beach-party-environment"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Studio 10b - Sculpting Tomorrow's Worlds in Real-Time 3D" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Sculpting Tomorrow's Worlds in Real-Time 3D", "subtitle": "Where Vision, Code, and Imagination Collide", "ctaText": "View Projects", "ctaTarget": "featured-project" })}  ${maybeRenderHead()}<div id="featured-project"> ${renderComponent($$result2, "FeaturedProject", $$FeaturedProject, { "title": "Project Highlight", "subtitle": featuredProject.subtitle, "description": featuredProject.description, "imageUrl": featuredProject.imageUrl })} </div> ${renderComponent($$result2, "ProjectGrid", $$ProjectGrid, { "title": "Immersive Outcomes", "description": "Immersive 3D spaces for galleries, presentations, fashion, and film \u2014 featuring audio, video, and interactive design for memorable digital experiences.", "projects": environmentProjects, "buttonText": "View Projects" })} ` })}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/index.astro", void 0);

const $$file = "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
