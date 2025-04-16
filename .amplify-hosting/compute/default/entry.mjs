import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D19BnCe0.mjs';
import { manifest } from './manifest_BAFUc448.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/projects/slugoriginal.astro.mjs');
const _page3 = () => import('./pages/projects/_slug_.astro.mjs');
const _page4 = () => import('./pages/projects.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/projects/slugoriginal.astro", _page2],
    ["src/pages/projects/[slug].astro", _page3],
    ["src/pages/projects.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/.amplify-hosting/static/",
    "server": "file:///Users/thestudio/Library/CloudStorage/Dropbox/Studio10b/Projects/_a_WEBSITE/websitedevfolder/websitedev3/.amplify-hosting/compute/default/",
    "host": "0.0.0.0",
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };
