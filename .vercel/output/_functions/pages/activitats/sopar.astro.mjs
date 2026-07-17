import { s as sanityClient, $ as $$Layout, a as $$Container, b as $$Icon } from '../../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../../renderers.mjs';

const $$Sopar = createComponent(async ($$result, $$props, $$slots) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const dadesSopar = await sanityClient.fetch(
    `*[_type == "sopar"][0]{
    datesSopar,
    hora,
    lloc,
    preuAdult,
    preuInfantil,
    dataLimitInscripcio,
    menuAdult,
    menuInfantil,
    fotosAnysPassats[]{
      asset,
      alt
    },
    linkMaps,
    linkInscripcio
  }`
  );
  const {
    datesSopar = "Dissabte, 20 de Juny de 2026",
    hora = "A partir de les 21:00h",
    lloc = "Pistes Exteriors del Club (en cas de pluja, al Pavell\xF3 Cobert)",
    preuAdult = "22\u20AC",
    preuInfantil = "12\u20AC (fins a 12 anys)",
    dataLimitInscripcio = "14 de Juny de 2026",
    menuAdult = [],
    menuInfantil = [],
    fotosAnysPassats = [],
    linkMaps = "",
    linkInscripcio = "https://docs.google.com/forms/"
  } = dadesSopar || {};
  const googleMapsUrl = linkMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lloc)}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sopar de Final de Temporada - AEB La Palma" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-14 relative z-10">  <div class="absolute top-10 left-1/4 w-[500px] h-[500px] bg-azulElectrico/5 rounded-full blur-[120px] pointer-events-none -z-10"></div> <div class="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amarilloClub/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>  <section class="text-center max-w-3xl mx-auto pt-8 pb-12 relative z-10"> <span class="inline-block bg-amarilloClub text-azulOscuro uppercase tracking-wider text-xs font-black px-4 py-1.5 rounded-full shadow-md">
Festa del Club • Tancament de Temporada
</span> <h1 class="text-5xl lg:text-6xl font-black text-white mt-6 uppercase tracking-tight leading-none">
Sopar de <br> <span class="text-azulElectrico">Final de Temporada</span> </h1>  <p class="text-lg mt-6 text-slate-300 max-w-xl mx-auto leading-relaxed">
Arriba el moment més esperat per fer pinya i celebrar tots els èxits de l'any. Jugadors, entrenadors, famílies i afició ens unim en una nit plena de germanor, bon menjar i riures. No t'ho perdis!
</p> </section>  <hr class="border-slate-800/80 my-4">  <section class="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">   <div class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4"> <div class="text-amarilloClub bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:calendar-alt" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Quan és?</h3> <p class="text-sm font-bold text-white mt-1">${datesSopar}</p> <p class="text-xs text-slate-400 mt-0.5">${hora}</p> </div> </div>  <a${addAttribute(googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4 hover:border-azulElectrico/50 hover:bg-slate-900/60 transition duration-300 group" title="Obrir ubicació a Google Maps"> <div class="text-amarilloClub bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80 group-hover:scale-110 transition-transform duration-300"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:map-marker" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
On es fa?
${renderComponent($$result3, "Icon", $$Icon, { "class": "w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-azulElectrico", "name": "uil:external-link-alt" })} </h3> <p class="text-sm font-bold text-white mt-1 leading-tight group-hover:text-azulElectrico transition-colors duration-200">${lloc}</p> </div> </a>  <div class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4"> <div class="text-amarilloClub bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:restaurant" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Preu del Tiquet</h3> <p class="text-sm font-bold text-white mt-1">Adults: <span class="text-amarilloClub">${preuAdult}</span></p> <p class="text-xs text-slate-400 mt-0.5">Infantil: ${preuInfantil}</p> </div> </div>  <a${addAttribute(linkInscripcio, "href")} target="_blank" rel="noopener noreferrer" class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4 hover:border-red-500/50 hover:bg-slate-900/60 transition duration-300 group text-left" title="Anar al formulari d'inscripció"> <div class="text-red-400 bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80 group-hover:scale-110 transition-transform duration-300"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6 animate-pulse", "name": "uil:exclamation-octagon" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono text-red-400 flex items-center gap-1">
⚠️ Atenció!
${renderComponent($$result3, "Icon", $$Icon, { "class": "w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300", "name": "uil:external-link-alt" })} </h3> <p class="text-sm font-bold text-white mt-1">Límit: <span class="text-amarilloClub">${dataLimitInscripcio}</span></p> </div> </a> </section>  <section class="py-12 relative z-10"> <div class="text-center max-w-2xl mx-auto mb-12">  <span class="inline-block bg-slate-950/90 border border-slate-800 text-slate-300 uppercase tracking-widest text-xs font-bold px-4 py-1.5 rounded-full shadow-inner">
Gastronomia de la festa
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-3">
Què soparem?
</h2> <p class="text-slate-300 mt-2 text-sm leading-relaxed">
Hem preparat dues opcions molt completes per assegurar que tothom gaudeixi de la vetllada. Tria el teu menú en omplir el formulari de reserva.
</p> </div> <div class="grid lg:grid-cols-2 gap-8 items-stretch">   <div class="bg-slate-950/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-800/80 shadow-xl flex flex-col justify-between relative overflow-hidden"> <div class="absolute -right-12 -bottom-12 text-slate-900/10 pointer-events-none"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-48 h-48", "name": "uil:restaurant" })} </div> <div class="relative z-10"> <div class="flex items-center justify-between mb-6"> <span class="bg-azulElectrico text-white font-black text-xs uppercase tracking-widest px-3 py-1.5 rounded-xl">
Menú Adults
</span> <span class="text-2xl font-black text-white">${preuAdult}</span> </div> <p class="text-slate-300 text-sm leading-relaxed mb-6">
Un assortiment molt variat per començar la nit, seguit de plats consistents i tancant amb unes postres a l'altura de la celebració.
</p> <ul class="space-y-4 border-t border-slate-800/80 pt-6"> ${menuAdult && menuAdult.map((element) => renderTemplate`<li class="flex items-start text-sm text-slate-200"> <div class="bg-azulElectrico/10 text-azulElectrico p-1 rounded-lg mr-3 mt-0.5 shrink-0 border border-azulElectrico/20"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4", "name": "uil:check" })} </div> <span>${element}</span> </li>`)} </ul> </div> </div>   <div class="bg-slate-950/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-800/80 shadow-xl flex flex-col justify-between relative overflow-hidden"> <div class="absolute -right-12 -bottom-12 text-slate-900/10 pointer-events-none"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-48 h-48", "name": "uil:restaurant" })} </div> <div class="relative z-10"> <div class="flex items-center justify-between mb-6"> <span class="bg-amarilloClub text-azulOscuro font-black text-xs uppercase tracking-widest px-3 py-1.5 rounded-xl">
Menú Infantil
</span> <span class="text-2xl font-black text-amarilloClub">${preuInfantil.split(" ")[0]}</span> </div> <p class="text-slate-300 text-sm leading-relaxed mb-6">
Plats deliciosos pensats específicament per als jugadors de la casa. Inclou refrescos i postres divertides!
</p> <ul class="space-y-4 border-t border-slate-800/80 pt-6"> ${menuInfantil && menuInfantil.map((element) => renderTemplate`<li class="flex items-start text-sm text-slate-200"> <div class="bg-amarilloClub/10 text-amarilloClub p-1 rounded-lg mr-3 mt-0.5 shrink-0 border border-amarilloClub/20"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4", "name": "uil:check" })} </div> <span>${element}</span> </li>`)} </ul> </div> </div> </div> </section>  ${fotosAnysPassats && fotosAnysPassats.length > 0 && renderTemplate`<section class="py-16 relative z-10"> <div class="text-center max-w-2xl mx-auto mb-12"> <span class="inline-block bg-azulElectrico/15 text-azulElectrico border border-azulElectrico/30 uppercase tracking-widest text-xs font-bold px-3 py-1 rounded-full">
Història de germanor
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-3">
Records de sopars passats
</h2> <p class="text-slate-300 mt-2 text-sm leading-relaxed">
No és només un sopar; són riures, anècdotes, premis, comiats de temporada i moments que queden gravats per sempre a l'AEB.
</p> </div>  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${fotosAnysPassats.map((foto, index) => renderTemplate`<div${addAttribute(`overflow-hidden rounded-2xl bg-slate-950 shadow-lg border border-slate-800/80 hover:border-azulElectrico/50 transition-all duration-300 group ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}`, "class")}> <img${addAttribute(urlFor(foto.asset).width(800).auto("format").url(), "src")}${addAttribute(foto.alt || "Sopar de final de temporada AEB La Palma", "alt")} loading="lazy" class="w-full h-full object-cover min-h-[200px] max-h-[400px] group-hover:scale-105 transition-transform duration-500"> </div>`)} </div> </section>`}   <section class="my-24 max-w-3xl mx-auto text-center relative z-10"> <div class="bg-slate-950/80 backdrop-blur-md text-white p-8 md:p-12 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden"> <div class="absolute -left-10 -bottom-10 text-slate-900/10 pointer-events-none"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-60 h-60", "name": "uil:crockery" })} </div> <div class="relative z-10"> <span class="text-amarilloClub font-black text-xs uppercase tracking-widest">
Reserva la teva cadira!
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-2">
Confirma la teva <span class="text-amarilloClub">assistència</span> </h2> <p class="text-slate-300 mt-4 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
Preguem que feu la reserva de tiquets abans de la data límit indicada. Això ens ajuda a garantir el correcte càtering i organització de les taules.
</p> <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(linkInscripcio, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-azulElectrico hover:bg-azulOscuro text-white font-black px-8 py-4 rounded-2xl transition duration-200 shadow-lg shadow-azulElectrico/20 hover:scale-102"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "name": "uil:clipboard-notes" })}
Reservar el meu tiquet
</a> <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-2xl border border-slate-800 transition duration-200 hover:border-slate-700">
Dubtes? Contacta amb el club
</a> </div> </div> </div> </section> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/activitats/sopar.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/activitats/sopar.astro";
const $$url = "/activitats/sopar";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sopar,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
