import { s as sanityClient, $ as $$Layout, a as $$Container } from '../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, h as addAttribute } from '../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import imageUrlBuilder from '@sanity/image-url';
import { $ as $$Sectionhead } from '../chunks/sectionhead_D_jxJ3f-.mjs';
export { renderers } from '../renderers.mjs';

const $$Equips = createComponent(async ($$result, $$props, $$slots) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const totsElsEquips = await sanityClient.fetch(`*[_type == "equip"] | order(nom asc)`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Els Nostres Equips - CB B\xE0squet" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-14 relative z-10"> ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate` <span class="text-gray-400 text-lg block">
Descobreix totes les plantilles que defensen els colors del nostre club aquesta temporada.
</span> <div class="mt-6 flex justify-center"> <a href="https://www.basquetcatala.cat/club/3189" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 hover:border-amarilloClub px-5 py-2.5 rounded-full text-xs md:text-sm font-bold text-gray-300 hover:text-white transition duration-300 shadow-lg group/fed"> <span class="text-amarilloClub">🏀</span> <span>Fitxa Oficial a la Federació Catalana de Basquetbol</span> <span class="text-amarilloClub group-hover/fed:translate-x-1 transition-transform duration-200">→</span> </a> </div> ` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate` <span class="text-slate-50 uppercase tracking-tight font-black">Els Nostres Equips</span> ` })}` })} <main class="mt-12 mb-20"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto"> ${totsElsEquips && totsElsEquips.map((equipo) => {
    const imatgePortada = equipo.galeria && equipo.galeria.length > 0 ? urlFor(equipo.galeria[0]).width(600).height(400).fit("crop").url() : "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&auto=format&fit=crop";
    return renderTemplate`<div class="bg-slate-900/60  rounded-2xl shadow-lg border border-slate-800 overflow-hidden group hover:border-azulElectrico hover:shadow-xl transition-all duration-300 flex flex-col justify-between">  <a${addAttribute(`/equips/${equipo.slug.current}`, "href")} class="block flex-grow">  <div class="relative aspect-video overflow-hidden bg-slate-950 border-b border-slate-800"> <img${addAttribute(imatgePortada, "src")}${addAttribute(`Fotografia oficial de l'equip ${equipo.nom}`, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100" loading="lazy">  ${equipo.categoria && renderTemplate`<span class="absolute top-3 left-3 bg-amarilloClub text-azulOscuro uppercase tracking-wider text-[10px] font-black px-2.5 py-1 rounded-md shadow-md"> ${equipo.categoria} </span>`} </div>  <div class="p-5"> <h2 class="text-xl font-black text-white uppercase tracking-tight group-hover:text-amarilloClub transition-colors duration-200"> ${equipo.nom} </h2> ${equipo.entrenador && renderTemplate`<p class="text-sm text-gray-400 mt-2">
Entrenador/a: <span class="text-gray-200 font-medium">${equipo.entrenador}</span> </p>`} </div> </a>  <div class="p-5 pt-0"> <a${addAttribute(`/equips/${equipo.slug.current}`, "href")} class="block text-center bg-azulElectrico hover:bg-azulOscuro text-white font-bold py-2.5 px-4 rounded-xl text-sm shadow-md transition duration-200 border border-azulElectrico/20">
Veure fitxa i partits →
</a> </div> </div>`;
  })} </div> </main> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/equips.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/equips.astro";
const $$url = "/equips";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Equips,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
