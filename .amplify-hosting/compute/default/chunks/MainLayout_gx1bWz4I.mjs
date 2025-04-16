import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate, e as renderComponent, g as renderHead, f as renderSlot } from './astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro("https://studio10b.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const navItems = [
    { label: "Projects", url: "/projects" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav> <ul class="flex gap-10 md:gap-20 list-none p-0 m-0"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")}${addAttribute(`text-white no-underline text-base font-medium transition-opacity duration-300 hover:opacity-80 ${currentPath === item.url ? "opacity-80" : "opacity-100"}`, "class")}> ${item.label} </a> </li>`)} </ul> </nav>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/Navigation.astro", void 0);

const $$AnimatedStudio10BLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="logo-container" data-astro-cid-stlrjhzz> <svg xmlns="http://www.w3.org/2000/svg" width="169.98" height="40.74" viewBox="0 0 169.98 40.74" class="studio-logo" data-astro-cid-stlrjhzz> <defs data-astro-cid-stlrjhzz> <linearGradient id="animatedGradient" x1="0" y1="0" x2="1" y2="0" data-astro-cid-stlrjhzz> <stop id="stop1" offset="0%" stop-color="springgreen" data-astro-cid-stlrjhzz></stop> <stop id="stop2" offset="100%" stop-color="magenta" data-astro-cid-stlrjhzz></stop> </linearGradient> </defs> <g data-astro-cid-stlrjhzz> <path d="M168.52,0H1.46C.66,0,0,.66,0,1.46v37.82c0,.81.66,1.46,1.46,1.46h167.06c.81,0,1.46-.66,1.46-1.46V1.46c0-.81-.66-1.46-1.46-1.46ZM109.28,37.36H3.39V3.39h105.89v33.97ZM123.54,29.99h-3.26v-10.58c0-.7-.57-1.27-1.3-1.27h-3.17v-3.1h3.29c2.53,0,4.43,1.74,4.43,4.24v10.71h.01ZM143.3,25.75c0,2.5-1.2,3.88-3.7,3.88h-7.82c-2.53,0-4.21-1.38-4.21-3.88v-7.26c0-2.53,1.68-3.66,4.21-3.66h7.82c2.5,0,3.7,1.13,3.7,3.63v7.3h0ZM162.79,25.72c0,2.53-1.9,4.28-4.4,4.28h-4.4c-1.46,0-2.79-1.43-2.98-2.82l-.7,2.82h-2.47V9.09h3.26v5.96h7.29c2.5,0,4.4,1.77,4.4,4.28v6.4h0ZM84.66,29.99h-3.26v-14.95h3.26v14.95ZM11.23,25.24v-.95h3.26v.98c0,.89.73,1.62,1.65,1.62h7.35c.92,0,1.65-.73,1.65-1.65v-2.6c0-.89-.73-1.62-1.65-1.62h-7.32c-2.69,0-4.78-2.06-4.78-4.78v-1.77c0-2.69,2.06-4.75,4.78-4.75h7.44c2.72,0,4.78,2.06,4.78,4.75v.95h-3.26v-.98c0-.89-.73-1.62-1.65-1.62h-7.19c-.92,0-1.65.73-1.65,1.62v1.9c0,.86.76,1.58,1.65,1.58h7.32c2.72,0,4.78,2.06,4.78,4.75v2.53c0,2.72-2.06,4.78-4.78,4.78h-7.6c-2.72,0-4.78-2.06-4.78-4.75h0ZM32.04,25.87v-14.57h3.26v3.74h4.37v3.1h-4.37v7.48c0,.7.57,1.27,1.3,1.27h4.43v3.1h-4.69c-2.53,0-4.31-1.62-4.31-4.12h.01ZM43.89,25.78v-10.74h3.26v10.58c0,.73.57,1.27,1.27,1.27h5.89c.7,0,1.27-.54,1.27-1.27v-10.58h3.26v10.74c0,2.53-1.93,4.21-4.43,4.21h-6.08c-2.5,0-4.43-1.68-4.43-4.21h0ZM67.05,29.99h4.4c1.46,0,2.79-1.43,2.98-2.82l.7,2.82h2.47V9.09h-3.26v5.96h-7.29c-2.5,0-4.4,1.77-4.4,4.28v6.4c0,2.53,1.9,4.28,4.4,4.28v-.02ZM84.66,12.25h-3.26v-3.17h3.26v3.17ZM92.9,29.99h6.08c2.5,0,4.43-1.74,4.43-4.24v-6.46c0-2.5-1.93-4.24-4.43-4.24h-6.08c-2.53,0-4.43,1.74-4.43,4.28v6.43c0,2.5,1.9,4.24,4.43,4.24h0ZM159.53,19.44v6.15c0,.73-.57,1.3-1.27,1.3h-7.16v-8.74h7.16c.7,0,1.27.6,1.27,1.3h0ZM139.28,17.6l-8.93,7.84v-5.99c0-.73.83-1.85,1.56-1.85h7.37ZM131.87,26.87l8.65-7.37v6.12c0,.7-.35,1.23-1.05,1.23h-7.57s-.02.02-.03.02h0ZM91.73,19.44c0-.73.57-1.3,1.3-1.3h5.83c.7,0,1.3.57,1.3,1.27v6.21c0,.7-.6,1.27-1.3,1.27h-5.83c-.73,0-1.3-.57-1.3-1.27v-6.18ZM65.91,19.44c0-.7.57-1.3,1.27-1.3h7.16v8.74h-7.16c-.7,0-1.27-.57-1.27-1.3v-6.15h0Z" fill="url(#animatedGradient)" data-astro-cid-stlrjhzz></path> </g> </svg> </div> `;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/AnimatedStudio10BLogo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm py-6 transition-all duration-300"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="flex justify-between items-center"> <a href="/" class="block"> ${renderComponent($$result, "AnimatedStudio10BLogo", $$AnimatedStudio10BLogo, {})} </a> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </div> </header> <!-- Spacer to prevent content from hiding behind fixed header 
<div class="h-24"></div>-->`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const navItems = [
    { label: "Projects", url: "/projects" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-900 text-white py-12"> <div class="container mx-auto px-4 md:px-8 max-w-screen-xl"> <div class="flex justify-between items-center border-t border-gray-800 pt-8 md:flex-row flex-col gap-8 text-center md:text-left"> <div> <p class="text-sm opacity-60 m-0">&copy; ${currentYear} Studio 10b LLC. All Rights Reserved.</p> </div> <nav> <ul class="flex md:flex-row flex-col gap-8 md:gap-4 list-none p-0 m-0"> ${navItems.map((item) => renderTemplate`<li> <a${addAttribute(item.url, "href")} class="text-white no-underline opacity-60 transition-opacity duration-300 hover:opacity-100"> ${item.label} </a> </li>`)} </ul> </nav> <div class="flex gap-4"> <a href="#" aria-label="Facebook" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> </a> <a href="#" aria-label="Twitter" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> </a> <a href="#" aria-label="Instagram" class="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg> </a> </div> </div> </div> </footer>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://studio10b.com");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, description = "Studio 10b - Sculpting Tomorrow's Worlds in Real-Time 3D" } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;800&display=swap" rel="stylesheet"><title>${title} | Studio 10b</title>${renderHead()}</head> <body class="min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/layouts/MainLayout.astro", void 0);

export { $$MainLayout as $ };
