import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderTemplate } from './astro/server_CEJ2q_J-.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://studio10b.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    href,
    variant = "primary",
    size = "medium",
    openInNewTab = false
    // Default to same window
  } = Astro2.props;
  const variantClasses = {
    primary: "bg-black text-white hover:bg-gray-800",
    outline: "bg-transparent border border-black text-black hover:bg-black hover:text-white",
    roundwhite: "bg-gray-100 hover:bg-gray-200 text-gray-500 font-regular py-3 px-6 rounded-full transition duration-300 ease-in-out border-2 border-gray-500 mb-4 md:mb-6"
  };
  const sizeClasses = {
    small: "text-sm py-2 px-4",
    medium: "py-3 px-6",
    large: "text-lg py-4 px-8"
  };
  const classes = `inline-block font-medium no-underline text-center rounded transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(classes, "class")}${addAttribute(openInNewTab ? "_blank" : void 0, "target")}${addAttribute(openInNewTab ? "noopener noreferrer" : void 0, "rel")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/Button.astro", void 0);

export { $$Button as $ };
