/* empty css                                 */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderScript, d as renderTemplate, e as renderComponent } from '../chunks/astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_gx1bWz4I.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://studio10b.com");
const $$HeroContact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroContact;
  const {
    title,
    subtitle,
    backgroundImage = "/images/projects-bg.jpg",
    category,
    client,
    year,
    filterCategories = []
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative h-[30vh] min-h-[300px] flex items-end text-white"> <!-- Background Image --> <div class="absolute inset-0 -z-10"> <img${addAttribute(backgroundImage, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"> </div> <!-- Gradient Overlay --> <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 -z-10"></div> <!-- Content Container --> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl pb-16"> <div class="max-w-xl"> <h1 class="text-4xl md:text-5xl font-bold mb-4">${title}</h1> <p class="text-xl opacity-80 mb-6">${subtitle}</p> <!-- Project Details Pills (conditionally rendered) --> ${(category || client || year) && renderTemplate`<div class="flex flex-wrap gap-4 mt-8"> ${category && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">${category}</span> </div>`} ${client && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">Client: ${client}</span> </div>`} ${year && renderTemplate`<div class="bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"> <span class="text-sm font-medium">Year: ${year}</span> </div>`} </div>`} <!-- Filter Categories (if provided) --> ${filterCategories.length > 0 && renderTemplate`<div class="mt-12"> <h2 class="text-2xl font-bold mb-6">Filter by Category</h2> <div class="flex flex-wrap gap-4"> ${filterCategories.map((category2, index) => renderTemplate`<button class="filter-btn py-2 px-6 text-base rounded border border-gray-200 hover:bg-gray-100 hover:text-black transition-all duration-300 data-[pressed=true]:bg-black data-[pressed=true]:text-white data-[pressed=true]:border-black"${addAttribute(category2, "data-category")}${addAttribute(index === 0 ? "true" : "false", "data-pressed")}> ${category2} </button>`)} </div> </div>`} </div> </div> </section> ${renderScript($$result, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroContact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroContact.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Contact Us - Studio 10b" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroContact, { "title": "Contact Us", "subtitle": "Let's Bring Your Vision to Life", "backgroundImage": "/images/contact-bg.jpg" })} ${maybeRenderHead()}<section class="py-24"> <div class="container mx-auto px-4 md:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div> <h2 class="text-4xl font-bold mb-6">Get in Touch</h2> <p class="text-lg mb-10 leading-relaxed">We'd love to hear from you. Whether you have a question about our services, projects, or anything else, our team is ready to answer all your questions.</p> <div class="flex mb-8"> <div class="mr-6 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> </div> <div> <h3 class="text-xl font-medium mb-2">Phone</h3> <p>+1 (555) 123-4567</p> </div> </div> <div class="flex mb-8"> <div class="mr-6 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> </div> <div> <h3 class="text-xl font-medium mb-2">Email</h3> <p>info@studiohob.com</p> </div> </div> <div class="flex mb-8"> <div class="mr-6 flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> </div> <div> <h3 class="text-xl font-medium mb-2">Location</h3> <p>123 Creative Way, San Francisco, CA 94103</p> </div> </div> </div> <div> <h2 class="text-4xl font-bold mb-6">Send a Message</h2> <form id="contactForm" class="space-y-6"> <div> <label for="name" class="block mb-2 font-medium">Name</label> <input type="text" id="name" name="name" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"> </div> <div> <label for="email" class="block mb-2 font-medium">Email</label> <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"> </div> <div> <label for="subject" class="block mb-2 font-medium">Subject</label> <input type="text" id="subject" name="subject" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"> </div> <div> <label for="message" class="block mb-2 font-medium">Message</label> <textarea id="message" name="message" rows="6" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-y"></textarea> </div> <button type="submit" class="px-8 py-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition duration-300">
Send Message
</button> </form> </div> </div> </div> </section> <section class="h-96 md:h-[500px] w-full"> <div class="h-full w-full"> <!-- Replace with actual map embed code --> <div class="h-full w-full bg-gray-100 flex items-center justify-center text-xl text-gray-600"> <p>Map Embed Goes Here</p> </div> </div> </section> ` })} ${renderScript($$result, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/contact.astro", void 0);

const $$file = "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
