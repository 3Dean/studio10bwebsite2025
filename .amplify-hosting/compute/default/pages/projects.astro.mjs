/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_gx1bWz4I.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://studio10b.com");
const $$HeroProjects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroProjects;
  const {
    title,
    subtitle,
    backgroundVideo = "https://deanyeager.s3.us-east-1.amazonaws.com/PortfolioHubs_2.mp4",
    backgroundImage = "/images/projects-bg.jpg",
    // Kept as fallback
    videoPoster = "/images/projects-bg.jpg",
    category,
    client,
    year,
    filterCategories = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[70vh] min-h-[600px] flex items-end text-white"> <!-- Background Video --> <div class="absolute inset-0 -z-10 overflow-hidden"> <video class="w-full h-full object-cover" autoplay muted loop playsinline${addAttribute(videoPoster, "poster")}> <source${addAttribute(backgroundVideo, "src")} type="video/mp4"> <!-- Fallback to image if video cannot be played --> <img${addAttribute(backgroundImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"> </video> </div> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-black/5 -z-10"></div> <!-- Content Container --> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl pb-16"> <div class="max-w-xl"> <h1 class="text-4xl md:text-5xl font-bold mb-4">${title}</h1> <p class="text-xl opacity-80 mb-6">${subtitle}</p> <!-- Project Details Pills (conditionally rendered) --> ${(category || client || year) && renderTemplate`<div class="flex flex-wrap gap-4 mt-8"> ${category && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">${category}</span> </div>`} ${client && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">Client: ${client}</span> </div>`} ${year && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">Year: ${year}</span> </div>`} </div>`} <!-- Filter Categories (if provided) --> ${filterCategories.length > 0 && renderTemplate`<div class="mt-12"> <h2 class="text-2xl font-bold mb-6">Filter by Category</h2> <div class="flex flex-wrap gap-4"> ${filterCategories.map((category2, index) => renderTemplate`<button class="filter-btn py-2 px-6 text-base rounded border border-gray-200 hover:bg-gray-100 hover:text-black transition-all duration-300 data-[pressed=true]:bg-black data-[pressed=true]:text-white data-[pressed=true]:border-black"${addAttribute(category2, "data-category")}${addAttribute(index === 0 ? "true" : "false", "data-pressed")}> ${category2} </button>`)} </div> </div>`} </div> </div> </section> ${renderScript($$result, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroProjects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroProjects.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      id: "1",
      title: "Virtual Marketing Experience",
      category: "Marketing Environment",
      imageUrl: "/images/env-project-1.jpg",
      slug: "marketing-environment"
    },
    {
      id: "2",
      title: "Independant Game Developers",
      category: "Gallery",
      imageUrl: "/images/env-project-2.jpg",
      slug: "videogame-gallery"
    },
    {
      id: "3",
      title: "Virtual Party Experience",
      category: "Event",
      imageUrl: "/images/env-project-3.jpg",
      slug: "beach-party-environment"
    },
    {
      id: "4",
      title: "Independant Film Festival",
      category: "Event",
      imageUrl: "/images/env-project-4.jpg",
      slug: "film-festival"
    },
    {
      id: "5",
      title: "LaSalle Signature 24 Fashion Show",
      category: "Fashion",
      imageUrl: "/images/env-project-5.jpg",
      slug: "fashion-show"
    },
    {
      id: "6",
      title: "Industrial Training Environment",
      category: "Training",
      imageUrl: "/images/project-6.jpg",
      slug: "industrial-training"
    }
  ];
  const uniqueCategories = ["All", ...new Set(projects.map((project) => project.category))];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Projects - Studio 10b" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroProjects, { "title": "Our Projects", "subtitle": "Explore Our Virtual Environments & 3D Experiences", "backgroundImage": "/images/projects-bg.jpg" })} ${maybeRenderHead()}<section class="py-24"> <div class="container mx-auto px-4 md:px-8"> <div class="mb-12"> <h2 class="text-2xl font-bold mb-6">Filter by Category</h2> <div class="flex flex-wrap gap-4"> ${uniqueCategories.map((category) => renderTemplate`<button class="filter-btn py-2 px-6 text-base rounded border border-gray-200 hover:bg-gray-100 transition-all duration-300 data-[pressed=true]:bg-black data-[pressed=true]:text-white data-[pressed=true]:border-black"${addAttribute(category, "data-category")}${addAttribute(category === "All" ? "true" : "false", "data-pressed")}> ${category} </button>`)} </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> ${projects.map((project) => renderTemplate`<div class="project-card overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"${addAttribute(project.category, "data-category")}> <a${addAttribute(`/projects/${project.slug}`, "href")} class="block text-current no-underline"> <div class="h-60 overflow-hidden"> <img${addAttribute(project.imageUrl, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div> <div class="p-6 bg-white"> <h3 class="text-xl font-medium mb-2">${project.title}</h3> <span class="text-sm text-gray-600">${project.category}</span> </div> </a> </div>`)} </div> </div> </section> ` })} ${renderScript($$result, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects.astro", void 0);

const $$file = "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
