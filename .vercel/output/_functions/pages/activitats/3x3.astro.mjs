import { s as sanityClient, $ as $$Layout, a as $$Container, b as $$Icon } from '../../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../../renderers.mjs';

const $$3X3 = createComponent(async ($$result, $$props, $$slots) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const dadesTorneig = await sanityClient.fetch(
    `*[_type == "torneig3x3"][0]{
    edicio,
    dates,
    lloc,
    linkMaps,
    preuInscripcio,
    dataLimitInscripcio,
    categories[]{
      nom,
      edats,
      icona
    },
    serveisInclosos,
    galeria[]{
      asset,
      alt
    },
    linkInscripcio
  }`
  );
  const {
    edicio = "XV",
    dates = "Del 5 al 7 de Juliol de 2026",
    lloc = "Pistes Exteriors i Pavell\xF3 AEB La Palma",
    linkMaps = "",
    preuInscripcio = "40\u20AC per equip",
    dataLimitInscripcio = "30 de Juny de 2026",
    categories = [],
    serveisInclosos = [],
    galeria = [],
    linkInscripcio = "https://docs.google.com/forms/"
  } = dadesTorneig || {};
  const googleMapsUrl = linkMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lloc)}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${edicio} Torneig 3x3 d'Estiu - AEB La Palma` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-14 relative z-10">  <div class="absolute top-10 left-1/4 w-[500px] h-[500px] bg-azulElectrico/5 rounded-full blur-[120px] pointer-events-none -z-10"></div> <div class="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amarilloClub/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>  <section class="text-center max-w-3xl mx-auto pt-8 pb-12 relative z-10"> <span class="inline-block bg-amarilloClub text-azulOscuro uppercase tracking-wider text-xs font-black px-4 py-1.5 rounded-full shadow-md">
L'esdeveniment de l'estiu • Inscripcions Obertes
</span> <h1 class="text-5xl lg:text-6xl font-black text-white mt-6 uppercase tracking-tight leading-none"> ${edicio} Torneig <br> <span class="text-azulElectrico">3x3 d'Estiu</span> </h1>  <p class="text-lg mt-6 text-slate-300 max-w-xl mx-auto leading-relaxed">
Torna el clàssic de l'estiu a La Palma! Tres dies de bàsquet, música, servei de bar, grans premis i el millor ambient esportiu de la comarca. No et quedis sense la teva plaça!
</p> </section>  <hr class="border-slate-800/80 my-4">  <section class="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">  <div class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4"> <div class="text-amarilloClub bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:calendar-alt" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Quan es fa?</h3> <p class="text-sm font-bold text-white mt-1">${dates}</p> </div> </div>  <a${addAttribute(googleMapsUrl, "href")} target="_blank" rel="noopener noreferrer" class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4 hover:border-azulElectrico/50 hover:bg-slate-900/60 transition duration-300 group" title="Obrir ubicació a Google Maps"> <div class="text-amarilloClub bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80 group-hover:scale-110 transition-transform duration-300"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:map-marker" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
On es juga?
${renderComponent($$result3, "Icon", $$Icon, { "class": "w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-azulElectrico", "name": "uil:external-link-alt" })} </h3> <p class="text-sm font-bold text-white mt-1 leading-tight group-hover:text-azulElectrico transition-colors duration-200">${lloc}</p> </div> </a>  <div class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4"> <div class="text-amarilloClub bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:ticket" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Preu per equip</h3> <p class="text-sm font-bold text-white mt-1">${preuInscripcio} <span class="text-xs font-normal text-slate-400">(màx. 4)</span></p> </div> </div>  <a${addAttribute(linkInscripcio, "href")} target="_blank" rel="noopener noreferrer" class="bg-slate-950/80 backdrop-blur-md text-white p-6 rounded-2xl border border-slate-800/80 shadow-lg flex items-center gap-4 hover:border-red-500/50 hover:bg-slate-900/60 transition duration-300 group text-left" title="Anar al formulari d'inscripció"> <div class="text-red-400 bg-slate-900 p-3 rounded-xl shrink-0 border border-slate-800/80 group-hover:scale-110 transition-transform duration-300"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6 animate-pulse", "name": "uil:exclamation-octagon" })} </div> <div> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono text-red-400 flex items-center gap-1">
⚠️ Atenció!
${renderComponent($$result3, "Icon", $$Icon, { "class": "w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300", "name": "uil:external-link-alt" })} </h3> <p class="text-sm font-bold text-white mt-1">Límit: <span class="text-amarilloClub">${dataLimitInscripcio}</span></p> </div> </a> </section>  <section class="py-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">  <div class="space-y-6"> <span class="inline-block bg-slate-950/90 border border-slate-800 text-slate-300 uppercase tracking-widest text-xs font-bold px-4 py-1.5 rounded-full shadow-inner">
Qui pot jugar?
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase leading-tight">
Categories de competició
</h2> <p class="text-slate-300 leading-relaxed">
El torneig està obert tant a equips masculins, femenins com a equips mixtes en categories formatives. Màxim 4 jugadors o jugadores per equip inscrit.
</p> <div class="grid gap-4 pt-4"> ${categories.map((cat) => (
    /* 🔴 CORREGIT: Targetes de categories passades a fons fosc premium i eliminat el bg-slate-50 clar */
    renderTemplate`<div class="flex items-center gap-4 bg-slate-950/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-800/80 shadow-md hover:border-azulElectrico/30 transition-all duration-300"> <div class="bg-azulElectrico/10 text-azulElectrico p-3 rounded-xl shrink-0 border border-azulElectrico/20"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": cat.icona || "uil:basketball" })} </div> <div> <h4 class="font-black text-white uppercase text-md leading-tight">${cat.nom}</h4> <p class="text-xs text-slate-400 mt-1">${cat.edats}</p> </div> </div>`
  ))} </div> </div>   <div class="space-y-6 bg-slate-950/80 backdrop-blur-md text-white p-8 md:p-10 rounded-3xl border border-slate-800/80 shadow-xl relative overflow-hidden"> <div class="absolute -right-16 -bottom-16 text-slate-900/10 pointer-events-none"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-64 h-64", "name": "uil:basketball" })} </div> <div class="relative z-10 space-y-6"> <span class="text-amarilloClub font-black text-xs uppercase tracking-widest">
El pack del participant
</span> <h2 class="text-3xl font-black text-white uppercase leading-tight">
Què inclou la <br><span class="text-amarilloClub">inscripció?</span> </h2> <p class="text-slate-300 text-sm leading-relaxed">
Volem que gaudeixis al màxim de l'experiència del 3x3. Tots els equips inscrits rebran un pack complet de benvinguda i tindreu serveis mèdics i d'avituallament garantits.
</p> <ul class="space-y-4 pt-4 border-t border-slate-800/80"> ${serveisInclosos.map((servei) => renderTemplate`<li class="flex items-start text-sm text-slate-200"> <div class="bg-amarilloClub/10 text-amarilloClub p-1 rounded-lg mr-3 mt-0.5 shrink-0 border border-amarilloClub/20"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4", "name": "uil:check" })} </div> <span>${servei}</span> </li>`)} </ul> </div> </div> </section>   <section class="py-12 bg-slate-950/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-slate-800/80 shadow-inner grid md:grid-cols-2 gap-8 items-center relative z-10"> <div> <h3 class="text-2xl font-black text-amarilloClub uppercase flex items-center gap-2">
🏆 Premis i Trofeus
</h3> <p class="text-slate-300 mt-3 text-sm leading-relaxed">
Hi haurà trofeus per als guanyadors i finalistes de cada categoria. Per a la categoria <strong class="font-bold text-white">Sènior</strong>, a més del trofeu, hi haurà <strong class="font-bold text-white">premis en metàl·lic</strong> i obsequis dels nostres col·laboradors locals. També organitzarem un <strong class="font-bold text-white">Concurs de Triples</strong> obert a tots els participants amb premi especial!
</p> </div> <div class="border-t md:border-t-0 md:border-l border-slate-800/80 pt-6 md:pt-0 md:pl-8"> <h3 class="text-2xl font-black text-azulElectrico uppercase flex items-center gap-2">
📋 Reglament
</h3> <p class="text-slate-300 mt-3 text-sm leading-relaxed">
Es jugarà sota el reglament oficial de 3x3 de la FIBA (partits a 21 punts o de 10 minuts de durada). El calendari oficial i el reglament detallat es faran arribar als responsables d'equip uns dies abans del torneig via correu electrònic.
</p> </div> </section>  ${galeria && galeria.length > 0 && renderTemplate`<section class="py-16 relative z-10"> <div class="text-center max-w-2xl mx-auto mb-12"> <span class="inline-block bg-azulElectrico/15 text-azulElectrico border border-azulElectrico/30 uppercase tracking-widest text-xs font-bold px-3 py-1 rounded-full">
Records i moments
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-3">
Galeria d'edicions anteriors
</h2> <p class="text-slate-300 mt-2 text-sm leading-relaxed">
Descobreix l'espectacular ambient, l'esportivitat i els grans moments que hem viscut a la pista les temporades passades.
</p> </div>  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> ${galeria.map((foto, index) => renderTemplate`<div${addAttribute(`overflow-hidden rounded-2xl bg-slate-950 shadow-lg border border-slate-800/80 hover:border-azulElectrico/50 transition-all duration-300 group ${index === 1 || index === 6 ? "md:col-span-2 md:row-span-2" : ""}`, "class")}> <img${addAttribute(urlFor(foto.asset).width(800).auto("format").url(), "src")}${addAttribute(foto.alt || "Fotografia del Torneig 3x3 AEB La Palma", "alt")} loading="lazy" class="w-full h-full object-cover min-h-[200px] max-h-[400px] group-hover:scale-105 transition-transform duration-500"> </div>`)} </div> </section>`}   <section class="my-24 max-w-3xl mx-auto text-center relative z-10"> <div class="bg-slate-950/80 backdrop-blur-md text-white p-8 md:p-12 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden"> <div class="absolute -left-10 -bottom-10 text-slate-900/10 pointer-events-none"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-60 h-60", "name": "uil:trophy" })} </div> <div class="relative z-10"> <span class="text-amarilloClub font-black text-xs uppercase tracking-widest">
No t'ho pensis més!
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-2">
Inscriu el teu <span class="text-amarilloClub">Equip ara</span> </h2> <p class="text-slate-300 mt-4 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
Les places són limitades per categoria per tal de garantir el correcte funcionament dels horaris del torneig. Registra el teu equip abans que s'esgotin!
</p> <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(linkInscripcio, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 bg-azulElectrico hover:bg-azulOscuro text-white font-black px-8 py-4 rounded-2xl transition duration-200 shadow-lg shadow-azulElectrico/20 hover:scale-102"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "name": "uil:clipboard-notes" })}
Formulari d'Inscripció
</a> <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-2xl border border-slate-800 transition duration-200 hover:border-slate-700">
Tens dubtes? Escriu-nos
</a> </div> </div> </div> </section> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/activitats/3x3.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/activitats/3x3.astro";
const $$url = "/activitats/3x3";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$3X3,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
