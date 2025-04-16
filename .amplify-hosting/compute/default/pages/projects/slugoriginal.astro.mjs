/* empty css                                    */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_gx1bWz4I.mjs';
import { $ as $$Button } from '../../chunks/Button_az6TwUfl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://studio10b.com");
async function getStaticPaths() {
  const projects = [
    {
      slug: "vr-museum",
      title: "Virtual Reality Museum",
      category: "VR Experience",
      client: "National Art Gallery",
      year: "2024",
      description: "An immersive virtual reality experience allowing visitors to explore famous artworks from around the world in a meticulously designed virtual museum environment.",
      challenge: "Creating accurate 3D models of priceless artworks while ensuring the VR experience remains accessible and intuitive for users of all technical abilities.",
      solution: "We developed a custom scanning technique to capture artwork in ultra-high definition, combined with an intuitive navigation system that adapts to the user's experience level.",
      features: [
        "Over 500 artworks in ultra-high definition",
        "Interactive guided tours with audio commentary",
        "Time-period specific museum architecture",
        "Social viewing mode for shared experiences"
      ],
      mainImage: "/images/env-project-1.jpg",
      galleryImages: [
        "/images/vr-museum-1.jpg",
        "/images/vr-museum-2.jpg",
        "/images/vr-museum-3.jpg"
      ]
    },
    {
      slug: "medical-training",
      title: "Interactive Medical Training",
      category: "Education",
      client: "University Medical Center",
      year: "2023",
      description: "A revolutionary medical training platform allowing students to practice complex procedures in a realistic virtual environment with haptic feedback and real-time guidance.",
      challenge: "Creating anatomically accurate simulations with realistic physics and haptic feedback that meet medical education standards.",
      solution: "We partnered with leading medical professionals to ensure anatomical accuracy, while developing custom physics engines for tissue behavior and integrated haptic feedback devices.",
      features: [
        "Anatomically accurate human body systems",
        "Real-time feedback on technique and precision",
        "Adjustable difficulty levels for progressive learning",
        "Performance analytics and skills assessment"
      ],
      mainImage: "/images/env-project-2.jpg",
      galleryImages: [
        "/images/medical-1.jpg",
        "/images/medical-2.jpg",
        "/images/medical-3.jpg"
      ]
    },
    {
      slug: "arch-visualization",
      title: "Architectural Visualization",
      category: "Visualization",
      client: "Metropolitan Architects",
      year: "2023",
      description: "A cutting-edge architectural visualization platform that enables clients to explore building designs in immersive 3D before construction begins.",
      challenge: "Creating photorealistic renderings that accurately represent materials, lighting, and spatial dimensions while maintaining performance on consumer hardware.",
      solution: "We implemented advanced lighting algorithms and optimized rendering techniques to deliver studio-quality visualizations that run smoothly on standard devices.",
      features: [
        "Photorealistic material rendering",
        "Dynamic time-of-day lighting simulation",
        "Interactive furniture and fixture placement",
        "Cross-sectional building exploration"
      ],
      mainImage: "/images/env-project-3.jpg",
      galleryImages: [
        "/images/arch-1.jpg",
        "/images/arch-2.jpg",
        "/images/arch-3.jpg"
      ]
    },
    {
      slug: "urban-planning",
      title: "Urban Planning Simulator",
      category: "Simulation",
      client: "City Development Authority",
      year: "2024",
      description: "An interactive urban planning tool that simulates the impact of development decisions on city infrastructure, traffic patterns, and quality of life.",
      challenge: "Developing accurate algorithms to predict the complex interdependencies of urban systems while maintaining an intuitive interface for non-technical users.",
      solution: "We created a simplified yet accurate simulation model backed by real-world data, with an accessible interface that clearly communicates potential outcomes.",
      features: [
        "Traffic flow simulation and prediction",
        "Public transit optimization tools",
        "Environmental impact assessment",
        "Population density and growth modeling"
      ],
      mainImage: "/images/project-4.jpg",
      galleryImages: [
        "/images/urban-1.jpg",
        "/images/urban-2.jpg",
        "/images/urban-3.jpg"
      ]
    },
    {
      slug: "wildlife-conservation",
      title: "Wildlife Conservation Experience",
      category: "Education",
      client: "Global Wildlife Foundation",
      year: "2023",
      description: "An educational experience that immerses users in endangered ecosystems to foster awareness and understanding of conservation challenges.",
      challenge: "Recreating delicate ecosystems with scientific accuracy while creating emotional connections between users and wildlife.",
      solution: "We collaborated with biologists and conservationists to develop authentic habitat simulations and interactive storylines that highlight the importance of biodiversity.",
      features: [
        "Realistic animal behavior simulations",
        "Interactive ecological relationship demonstrations",
        "Before/after conservation scenario exploration",
        "Personalized conservation action plans"
      ],
      mainImage: "/images/project-5.jpg",
      galleryImages: [
        "/images/wildlife-1.jpg",
        "/images/wildlife-2.jpg",
        "/images/wildlife-3.jpg"
      ]
    },
    {
      slug: "industrial-training",
      title: "Industrial Training Environment",
      category: "Training",
      client: "Global Manufacturing Corp",
      year: "2024",
      description: "A comprehensive virtual training environment for industrial workers to practice complex and potentially hazardous procedures in a safe setting.",
      challenge: "Creating realistic simulations of industrial equipment and processes with accurate physics and safety protocols.",
      solution: "We developed high-fidelity equipment models with functional controls and realistic failure scenarios, integrated with haptic feedback systems for skill development.",
      features: [
        "High-fidelity machine modeling",
        "Procedural safety protocol training",
        "Maintenance and troubleshooting scenarios",
        "Performance tracking and certification"
      ],
      mainImage: "/images/project-6.jpg",
      galleryImages: [
        "/images/industrial-1.jpg",
        "/images/industrial-2.jpg",
        "/images/industrial-3.jpg"
      ]
    }
  ];
  return projects.map((project) => {
    return {
      params: { slug: project.slug },
      props: { project }
    };
  });
}
const $$Slugoriginal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Slugoriginal;
  const { project } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${project.title} - Studio 10b` }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="relative h-[70vh] min-h-[600px] flex items-end text-white"> <div class="absolute inset-0 -z-10"> <img${addAttribute(project.mainImage, "src")}${addAttribute(project.title, "alt")} class="w-full h-full object-cover"> </div> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 -z-10"></div> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl pb-16"> <div> <h1 class="text-4xl md:text-5xl font-bold mb-4">${project.title}</h1> <p class="text-xl opacity-80">${project.category}</p> </div> </div> </section>  <section class="py-24"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="grid lg:grid-cols-3 gap-16"> <!-- Main Content (2/3 width) --> <div class="lg:col-span-2 space-y-16"> <!-- Overview --> <div> <h2 class="text-3xl md:text-4xl font-bold mb-6">Overview</h2> <p class="text-lg leading-relaxed">${project.description}</p> </div> <!-- Challenge & Solution --> <div class="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg"> <div> <h3 class="text-2xl font-bold mb-4">The Challenge</h3> <p class="leading-relaxed">${project.challenge}</p> </div> <div> <h3 class="text-2xl font-bold mb-4">Our Solution</h3> <p class="leading-relaxed">${project.solution}</p> </div> </div> <!-- Key Features --> <div> <h3 class="text-2xl font-bold mb-6">Key Features</h3> <ul class="space-y-4"> ${project.features.map((feature) => renderTemplate`<li class="relative pl-8 text-lg"> <span class="absolute left-0 top-0 text-black">→</span> ${feature} </li>`)} </ul> </div> <!-- Project Gallery --> <div> <h3 class="text-2xl font-bold mb-6">Project Gallery</h3> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${project.galleryImages.map((image) => renderTemplate`<div class="rounded-lg overflow-hidden h-48 md:h-52"> <img${addAttribute(image, "src")}${addAttribute(`${project.title} gallery image`, "alt")} class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div>`)} </div> </div> </div> <!-- Sidebar (1/3 width) --> <div> <div class="bg-gray-50 p-6 md:p-8 rounded-lg sticky top-8"> <h3 class="text-2xl font-bold mb-6">Project Information</h3> <div class="flex justify-between py-4 border-b border-gray-200"> <span class="font-semibold">Client</span> <span>${project.client}</span> </div> <div class="flex justify-between py-4 border-b border-gray-200"> <span class="font-semibold">Category</span> <span>${project.category}</span> </div> <div class="flex justify-between py-4 border-b border-gray-200"> <span class="font-semibold">Year</span> <span>${project.year}</span> </div> <div class="mt-8 flex flex-col gap-4"> ${renderComponent($$result2, "Button", $$Button, { "href": "/contact", "variant": "primary" }, { "default": ($$result3) => renderTemplate`
Inquire About This Project
` })} ${renderComponent($$result2, "Button", $$Button, { "href": "/projects", "variant": "outline" }, { "default": ($$result3) => renderTemplate`
View All Projects
` })} </div> </div> </div> </div> </div> </section>  <section class="py-24 bg-gray-50"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Related Projects</h2> <div class="grid md:grid-cols-2 gap-10"> <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"> <a href="/projects/urban-planning" class="block text-current no-underline"> <div class="h-60 overflow-hidden"> <img src="/images/project-4.jpg" alt="Urban Planning Simulator" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div> <div class="p-6"> <h3 class="text-xl font-medium mb-2">Urban Planning Simulator</h3> <span class="text-sm text-gray-600">Simulation</span> </div> </a> </div> <div class="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"> <a href="/projects/wildlife-conservation" class="block text-current no-underline"> <div class="h-60 overflow-hidden"> <img src="/images/project-5.jpg" alt="Wildlife Conservation Experience" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> </div> <div class="p-6"> <h3 class="text-xl font-medium mb-2">Wildlife Conservation Experience</h3> <span class="text-sm text-gray-600">Education</span> </div> </a> </div> </div> </div> </section> ` })}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects/slugoriginal.astro", void 0);

const $$file = "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects/slugoriginal.astro";
const $$url = "/projects/slugoriginal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Slugoriginal,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
