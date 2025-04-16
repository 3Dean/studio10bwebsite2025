import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { h as decodeKey } from './chunks/astro/server_CEJ2q_J-.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C5tlvjcA.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/","cacheDir":"file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/node_modules/.astro/","outDir":"file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/dist/","srcDir":"file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/","publicDir":"file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/public/","buildClientDir":"file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/.amplify-hosting/static/","buildServerDir":"file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/.amplify-hosting/compute/default/","adapterName":"astro-aws-amplify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/slugoriginal/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/slugoriginal","isIndex":false,"type":"page","pattern":"^\\/projects\\/slugoriginal\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"slugoriginal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/slugoriginal.astro","pathname":"/projects/slugoriginal","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://studio10b.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects/slugoriginal.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects/slugoriginal@_@astro":"pages/projects/slugoriginal.astro.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"pages/projects/_slug_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BAFUc448.mjs","/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.yIysW-AO.js","/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects.astro?astro&type=script&index=0&lang.ts":"_astro/projects.astro_astro_type_script_index_0_lang.CsZCmdI3.js","/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroProjects.astro?astro&type=script&index=0&lang.ts":"_astro/HeroProjects.astro_astro_type_script_index_0_lang.nqEDOmW5.js","/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.CLK-5gw4.js","/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroAbout.astro?astro&type=script&index=0&lang.ts":"_astro/HeroAbout.astro_astro_type_script_index_0_lang.nqEDOmW5.js","/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroContact.astro?astro&type=script&index=0&lang.ts":"_astro/HeroContact.astro_astro_type_script_index_0_lang.nqEDOmW5.js","/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/VideoPlayer.astro?astro&type=script&index=0&lang.ts":"_astro/VideoPlayer.astro_astro_type_script_index_0_lang.WMz2S4YQ.js","astro:scripts/page.js":"_astro/page.lDjizr83.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/contact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"contactForm\");e&&e.addEventListener(\"submit\",t=>{t.preventDefault();const o=new FormData(e),n=Object.fromEntries(o.entries());console.log(\"Form submitted with values:\",n),alert(\"Thank you for your message! We will get back to you soon.\"),e.reset()})});"],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/pages/projects.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const r=document.querySelectorAll(\".filter-btn\"),d=document.querySelectorAll(\".project-card\");r.forEach(e=>{e.addEventListener(\"click\",()=>{const a=e.getAttribute(\"data-category\");r.forEach(t=>{t.setAttribute(\"data-pressed\",\"false\")}),e.setAttribute(\"data-pressed\",\"true\"),d.forEach(t=>{a===\"All\"||t.getAttribute(\"data-category\")===a?t.classList.remove(\"hidden\"):t.classList.add(\"hidden\")})})})});"],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroProjects.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.querySelectorAll(\".filter-btn\");t.length>0&&t.forEach(e=>{e.addEventListener(\"click\",()=>{const r=e.getAttribute(\"data-category\");t.forEach(a=>{a.setAttribute(\"data-pressed\",\"false\")}),e.setAttribute(\"data-pressed\",\"true\"),window.dispatchEvent(new CustomEvent(\"filterProjects\",{detail:{category:r}}))})})});"],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroAbout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.querySelectorAll(\".filter-btn\");t.length>0&&t.forEach(e=>{e.addEventListener(\"click\",()=>{const r=e.getAttribute(\"data-category\");t.forEach(a=>{a.setAttribute(\"data-pressed\",\"false\")}),e.setAttribute(\"data-pressed\",\"true\"),window.dispatchEvent(new CustomEvent(\"filterProjects\",{detail:{category:r}}))})})});"],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/HeroContact.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.querySelectorAll(\".filter-btn\");t.length>0&&t.forEach(e=>{e.addEventListener(\"click\",()=>{const r=e.getAttribute(\"data-category\");t.forEach(a=>{a.setAttribute(\"data-pressed\",\"false\")}),e.setAttribute(\"data-pressed\",\"true\"),window.dispatchEvent(new CustomEvent(\"filterProjects\",{detail:{category:r}}))})})});"],["/Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/src/components/VideoPlayer.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".video-player-container\").forEach(n=>{const e=n.querySelector(\"video\"),t=n.querySelector(\".custom-thumbnail-container\");e&&t&&(t.addEventListener(\"click\",()=>{t.style.display=\"none\",e.style.display=\"block\",e.controls=!0,e.play()}),e.addEventListener(\"ended\",()=>{t.style.display=\"block\",e.style.display=\"none\"}))})});"]],"assets":["/_astro/about.BJXo-RM2.css","/favicon.svg","/_astro/Hero.astro_astro_type_script_index_0_lang.CLK-5gw4.js","/_astro/page.lDjizr83.js","/images/about-bg.jpg","/images/about-team.jpg","/images/contact-bg.jpg","/images/env-project-1-gallery-1.jpg","/images/env-project-1-gallery-2.jpg","/images/env-project-1-gallery-3.jpg","/images/env-project-1-thumbnail.jpg","/images/env-project-1.jpg","/images/env-project-10.jpg","/images/env-project-11.jpg","/images/env-project-12.jpg","/images/env-project-13.jpg","/images/env-project-14.jpg","/images/env-project-2-gallery-1.jpg","/images/env-project-2-gallery-2.jpg","/images/env-project-2-gallery-3.jpg","/images/env-project-2-thumbnail.jpg","/images/env-project-2.jpg","/images/env-project-3-gallery-1.jpg","/images/env-project-3-gallery-2.jpg","/images/env-project-3-gallery-3.jpg","/images/env-project-3-thumbnail.jpg","/images/env-project-3.jpg","/images/env-project-4-gallery-1.jpg","/images/env-project-4-gallery-2.jpg","/images/env-project-4-gallery-3.jpg","/images/env-project-4-thumbnail.jpg","/images/env-project-4.jpg","/images/env-project-5-gallery-1.jpg","/images/env-project-5-gallery-2.jpg","/images/env-project-5-gallery-3.jpg","/images/env-project-5-thumbnail.jpg","/images/env-project-5.jpg","/images/env-project-6.jpg","/images/env-project-7.jpg","/images/env-project-8.jpg","/images/env-project-9.jpg","/images/featured-project.jpg","/images/hero-bg.jpg","/images/humanguild-thumbnail.jpg","/images/logo.svg","/images/medical-1.jpg","/images/medical-2.jpg","/images/medical-3.jpg","/images/project-4.jpg","/images/project-5.jpg","/images/project-6.jpg","/images/projects-bg.jpg","/images/skybox.jpg","/images/studio10blogo.svg","/images/video_thumbnails.jpg","/images/vr-museum-1.jpg","/images/vr-museum-2.jpg","/images/vr-museum-3.jpg","/_astro/page.lDjizr83.js","/about/index.html","/contact/index.html","/projects/slugoriginal/index.html","/projects/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"6wvAK3ORT4N4JSk5fuZVeSfA9FSlRTDHtfcXmzwshSM="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
