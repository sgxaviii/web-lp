import { s as sanityClient, $ as $$Layout, a as $$Container } from '../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../renderers.mjs';

const $$Patrocinadors = createComponent(async ($$result, $$props, $$slots) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const patrocinadors = await sanityClient.fetch(`*[_type == "patrocinador"] | order(nom asc)`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Patrocinadors - AEB La Palma" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-5xl mt-14 relative z-10 mb-24">  <div class="border-b border-slate-900 pb-6 mb-12 text-center md:text-left"> <h1 class="text-4xl lg:text-5xl font-black text-slate-50 uppercase tracking-tight">
Patrocinadors Oficials
</h1> <p class="text-slate-400 mt-4 text-lg max-w-2xl leading-relaxed">
Gràcies al compromís i suport d'aquestes empreses i entitats, fem possible que l'esport, la competició i els nostres valors segueixin creixent dia a dia.
</p> </div>  ${patrocinadors.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> ${patrocinadors.map((patro) => {
    const CardTag = patro.link ? "a" : "div";
    return renderTemplate`${renderComponent($$result3, "CardTag", CardTag, { "href": patro.link, "target": patro.link ? "_blank" : void 0, "rel": patro.link ? "noopener noreferrer" : void 0, "class": "bg-slate-900/60 p-6 rounded-2xl border border-slate-800 shadow-md backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group block cursor-pointer text-left" }, { "default": async ($$result4) => renderTemplate` <div>  <div class="bg-slate-950/50 w-full p-6 rounded-xl border border-slate-800/80 h-36 flex items-center justify-center mb-5 shadow-inner"> <img${addAttribute(urlFor(patro.logo).width(400).url(), "src")}${addAttribute(`Logo de ${patro.nom}`, "alt")} class="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105" loading="lazy"> </div>  <h2 class="text-xl font-bold text-white mb-2 group-hover:text-amarilloClub transition-colors"> ${patro.nom} </h2>  ${patro.descripcio && renderTemplate`<p class="text-sm text-gray-400 line-clamp-3 mb-4 leading-relaxed"> ${patro.descripcio} </p>`} </div> ${patro.link && renderTemplate`<span class="mt-4 inline-flex items-center justify-center gap-2 bg-slate-800 group-hover:bg-amarilloClub group-hover:text-azulOscuro text-white text-xs font-black px-4 py-3 rounded-xl transition-all duration-300 shadow-md w-full uppercase tracking-wider">
Visitar Web Oficial ↗
</span>`}` })}`;
  })} </div>` : renderTemplate`<div class="text-center bg-slate-900/40 p-12 rounded-2xl border border-slate-800 border-dashed max-w-xl mx-auto"> <p class="text-gray-400 text-lg">Actualment estem actualitzant la llista de patrocinadors.</p> <p class="text-slate-400 text-sm mt-2">Vols patrocinar al club? Posa't en contacte amb la junta directiva!</p> </div>`} </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/patrocinadors.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/patrocinadors.astro";
const $$url = "/patrocinadors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Patrocinadors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
