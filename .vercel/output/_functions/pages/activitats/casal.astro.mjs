import { s as sanityClient, $ as $$Layout, a as $$Container, b as $$Icon } from '../../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../../renderers.mjs';

const $$Casal = createComponent(async ($$result, $$props, $$slots) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const dadesCasal = await sanityClient.fetch(`*[_type == "casal"][0]{
  ...,
  "linkInscripcioUrl": documentInscripcio.asset->url,
  serveis[]{
    titol,
    descripcio,
    icona,
    enllac
  }
}`);
  const titolHero = dadesCasal?.titolHero || "Casal d'Estiu";
  const subtitolHero = dadesCasal?.subtitolHero || "AEB La Palma";
  const descripcioHero = dadesCasal?.descripcioHero || "El millor estiu es viu a la pista! Un casal esportiu dissenyat per a nens i nenes de 4 a 16 anys que vulguin gaudir del b\xE0squet.";
  const imatgePortada = dadesCasal?.imatgePortada ? urlFor(dadesCasal.imatgePortada).width(800).height(600).fit("crop").url() : "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=800&auto=format&fit=crop";
  const serveis = dadesCasal?.serveis || [
    {
      titol: "B\xE0squet i Tecnificaci\xF3",
      descripcio: "Entrenaments adaptats per a tots els nivells.",
      icona: "uil:basketball",
      enllac: "/equips"
    }
  ];
  const torns = dadesCasal?.torns || [
    { setmana: "Setmana 1", dates: "Del 22 al 26 de Juny", estat: "Inscripcions Obertes" }
  ];
  const tarifes = dadesCasal?.tarifes || [
    { concepte: "Horari General (9:00 h a 13:30 h)", preu: "85\u20AC / setmana" }
  ];
  const descomptes = dadesCasal?.descomptes || [
    "10% de descompte a partir del segon germ\xE0/ana."
  ];
  const linkInscripcio = dadesCasal?.linkInscripcio || dadesCasal?.linkInscripcioUrl || "https://docs.google.com/forms/";
  const emailContacte = dadesCasal?.emailContacte || "casal@aeblapalma.cat";
  const telefonContacte = dadesCasal?.telefonContacte || "93 000 00 00";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${titolHero} - ${subtitolHero}` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-14 relative z-10">  <section class="grid lg:grid-cols-2 gap-8 items-center pt-8 pb-12"> <div> <span class="bg-amarilloClub text-azulOscuro uppercase tracking-wider text-xs font-black px-3 py-1 rounded-full shadow-sm">
Estiu 2026 • Inscripcions Obertes
</span> <h1 class="text-5xl lg:text-6xl font-black text-slate-50 mt-4 uppercase tracking-tight leading-none"> ${titolHero} <br> <span class="text-azulElectrico">${subtitolHero}</span> </h1> <p class="text-lg mt-6 text-slate-400 max-w-xl leading-relaxed"> ${descripcioHero} </p> <div class="mt-8 flex flex-col sm:flex-row gap-4"> <a${addAttribute(linkInscripcio, "href")} class="inline-flex items-center justify-center gap-2 bg-azulElectrico hover:bg-azulOscuro text-white font-black px-8 py-4 rounded-2xl transition duration-200 shadow-lg"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "name": "uil:file-edit-alt" })}
Inscriure's ara
</a> <a href="#info" class="inline-flex items-center justify-center gap-2 border-2 border-slate-700 hover:border-blue-400 bg-slate-900/40 text-slate-300 hover:text-blue-400 font-bold px-8 py-4 rounded-2xl transition duration-200">
Més informació
</a> </div> </div>  <div class="relative"> <div class="absolute -inset-1.5 bg-gradient-to-r from-azulElectrico to-amarilloClub rounded-3xl blur opacity-30"></div> <img${addAttribute(imatgePortada, "src")} alt="Imatge promocional del Casal d'Estiu" class="relative w-full h-[350px] md:h-[450px] object-cover rounded-3xl border border-slate-800 shadow-2xl"> </div> </section> <hr class="border-slate-800/80 my-16">  <section id="info" class="scroll-mt-20"> <div class="text-center max-w-2xl mx-auto"> <h2 class="text-3xl lg:text-4xl font-black text-slate-50 uppercase">
Un casal ple d'<span class="text-azulElectrico">activitats</span> </h2> <p class="text-slate-400 mt-3">
Combinem l'esport de la canasta amb activitats d'estiu divertides i refrescants, dirigides per monitors titulats de la casa.
</p> </div> <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"> ${serveis.map((servei) => {
    const t\u00E9Enllac = !!servei.enllac;
    const Contenidor = t\u00E9Enllac ? "a" : "div";
    return renderTemplate`${renderComponent($$result3, "Contenidor", Contenidor, { "href": servei.enllac, "class": `bg-slate-900/60 p-6 rounded-2xl border border-slate-800/80 shadow-sm transition duration-200 flex flex-col items-start group ${t\u00E9Enllac ? "hover:shadow-md hover:border-slate-700 cursor-pointer" : ""}` }, { "default": async ($$result4) => renderTemplate` <div class="bg-slate-900 text-amarilloClub p-3 rounded-xl mb-4 group-hover:bg-azulElectrico transition-colors duration-200"> ${renderComponent($$result4, "Icon", $$Icon, { "class": "w-6 h-6", "name": servei.icona || "uil:basketball" })} </div> <h3 class="font-bold text-slate-50 uppercase text-lg mb-2 inline-flex items-center gap-1.5 group-hover:text-azulElectrico transition-colors duration-200"> ${servei.titol} ${t\u00E9Enllac && renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "class": "w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-200 text-azulElectrico transform translate-x-[-4px] group-hover:translate-x-0", "name": "uil:arrow-right" })}`} </h3> <p class="text-slate-400 text-sm leading-relaxed"> ${servei.descripcio} </p> ` })}`;
  })} </div> </section>  <section class="mt-24 bg-slate-900/60 text-white p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl"> <div class="grid lg:grid-cols-2 gap-12 items-start"> <div> <span class="text-amarilloClub font-black text-xs uppercase tracking-widest">
Planificació setmanal
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-2">
Torns de l'Estiu <span class="text-amarilloClub">2026</span> </h2> <p class="text-slate-300 mt-4 leading-relaxed">
Podeu inscriure els vostres fills per setmanes individuals. Adaptem les activitats a les diferents franges d'edat.
</p> <div class="mt-8 space-y-3"> ${torns.map((torn) => renderTemplate`<div class="flex items-center justify-between bg-slate-950/60 px-4 py-3 rounded-xl border border-slate-800"> <div> <p class="font-bold text-white text-sm md:text-base">${torn.setmana}</p> <p class="text-xs text-slate-400">${torn.dates}</p> </div> <span${addAttribute(`text-[10px] font-black uppercase px-2.5 py-1 rounded-md ${torn.estat === "\xDAltimes Places" ? "bg-orange-950/40 text-orange-400 border border-orange-800/40" : torn.estat === "Complet" ? "bg-slate-700 text-slate-300" : "bg-azulElectrico text-white"}`, "class")}> ${torn.estat} </span> </div>`)} </div> </div>  <div class="bg-slate-950/80 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-inner"> <h3 class="text-2xl font-black text-amarilloClub uppercase mb-4">
Tarifes i Horaris
</h3> <div class="space-y-4 text-slate-300 text-sm md:text-base"> ${tarifes.map((tarifa) => renderTemplate`<div class="flex justify-between border-b border-slate-800 pb-2"> <span>${tarifa.concepte}</span> <span class="font-bold text-white">${tarifa.preu}</span> </div>`)} </div> ${descomptes.length > 0 && renderTemplate`<div class="mt-6 bg-slate-900/50 p-4 rounded-xl border border-slate-800"> <h4 class="font-bold text-white text-sm mb-1">🎁 Descomptes disponibles:</h4> <ul class="text-xs text-slate-400 list-disc list-inside space-y-1"> ${descomptes.map((descompte) => renderTemplate`<li>${descompte}</li>`)} </ul> </div>`} </div> </div> </section>  <section id="inscripcio" class="mt-24 bg-slate-900/60 text-white p-8 md:p-12 rounded-3xl border border-slate-800 shadow-xl">  <div class="bg-slate-950/80 border border-slate-800 p-8 md:p-12 rounded-2xl shadow-inner text-center">  <div class="bg-azulElectrico/15 text-azulElectrico w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-azulElectrico/20"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-7 h-7", "name": "uil:clipboard-notes" })} </div>  <h2 class="text-3xl lg:text-4xl font-black text-white uppercase">
Fes la teva <span class="text-amarilloClub">Inscripció</span> </h2> <p class="text-slate-300 mt-4 max-w-xl mx-auto leading-relaxed text-sm md:text-base">
El procés de sol·licitud de plaça es realitza completament en línia. Omple el nostre formulari de Google de forma ràpida i còmoda des de qualsevol dispositiu.
</p> <div class="mt-8 flex justify-center"> <a${addAttribute(linkInscripcio, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-3 bg-azulElectrico hover:bg-azulOscuro text-white font-black px-10 py-5 rounded-2xl transition duration-200 shadow-lg hover:shadow-azulElectrico/25"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:external-link-alt" })}
Omplir el Formulari de Google
</a> </div>  <p class="text-xs text-slate-400 mt-8 leading-relaxed">
Un cop enviat el formulari, l'equip de coordinació es posarà en contacte amb vosaltres per confirmar la plaça. <br class="hidden sm:inline">
Per a qualsevol dubte tècnic, pots contactar trucant al <span class="font-bold text-white">${telefonContacte}</span> o escrivint a <span class="font-bold text-white">${emailContacte}</span>.
</p> </div> </section> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/activitats/casal.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/activitats/casal.astro";
const $$url = "/activitats/casal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Casal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
