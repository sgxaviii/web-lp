import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DFQrtRj-.mjs';
import { manifest } from './manifest_CAdGn1Kw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/activitats/3x3.astro.mjs');
const _page3 = () => import('./pages/activitats/casal.astro.mjs');
const _page4 = () => import('./pages/activitats/sopar.astro.mjs');
const _page5 = () => import('./pages/activitats.astro.mjs');
const _page6 = () => import('./pages/club/equipaments.astro.mjs');
const _page7 = () => import('./pages/club/historia.astro.mjs');
const _page8 = () => import('./pages/club/quisom.astro.mjs');
const _page9 = () => import('./pages/club.astro.mjs');
const _page10 = () => import('./pages/contact.astro.mjs');
const _page11 = () => import('./pages/equips/_slug_.astro.mjs');
const _page12 = () => import('./pages/equips.astro.mjs');
const _page13 = () => import('./pages/legal/avis-legal.astro.mjs');
const _page14 = () => import('./pages/legal/cookies.astro.mjs');
const _page15 = () => import('./pages/legal/privacitat.astro.mjs');
const _page16 = () => import('./pages/multimedia.astro.mjs');
const _page17 = () => import('./pages/patrocinadors.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/activitats/3x3.astro", _page2],
    ["src/pages/activitats/casal.astro", _page3],
    ["src/pages/activitats/sopar.astro", _page4],
    ["src/pages/activitats/index.astro", _page5],
    ["src/pages/club/equipaments.astro", _page6],
    ["src/pages/club/historia.astro", _page7],
    ["src/pages/club/quisom.astro", _page8],
    ["src/pages/club/index.astro", _page9],
    ["src/pages/contact.astro", _page10],
    ["src/pages/equips/[slug].astro", _page11],
    ["src/pages/equips.astro", _page12],
    ["src/pages/legal/avis-legal.astro", _page13],
    ["src/pages/legal/cookies.astro", _page14],
    ["src/pages/legal/privacitat.astro", _page15],
    ["src/pages/multimedia.astro", _page16],
    ["src/pages/patrocinadors.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8748ecf2-960e-4852-9d57-76e1800c644d",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
