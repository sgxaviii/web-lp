import { s as sanityClient, $ as $$Layout, a as $$Container, b as $$Icon } from '../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  let activitats = [];
  try {
    activitats = await sanityClient.fetch(
      `*[_type == "activitat"] | order(ordre asc, _createdAt desc) {
      titol,
      "slug": slug.current,
      ruta,
      descripcio,
      categoria,
      icona,
      etiqueta,
      etiquetaColor
    }`
    );
  } catch (error) {
    console.error("Error al carregar les activitats des de Sanity:", error);
  }
  const obtenirColorIcona = (icona) => {
    switch (icona) {
      case "uil:basketball":
        return "text-azulElectrico bg-azulElectrico/10";
      case "uil:restaurant":
        return "text-amarilloClub bg-amarilloClub/10";
      case "uil:sun":
        return "text-orange-400 bg-orange-950/30";
      case "uil:users-alt":
        return "text-blue-400 bg-blue-950/30";
      default:
        return "text-slate-400 bg-slate-900/50";
    }
  };
  const obtenirEstilEtiqueta = (colorDefinit, textEtiqueta) => {
    const text = textEtiqueta ? textEtiqueta.toLowerCase() : "";
    if (text.includes("places") || text.includes("\xFAltimes") || text.includes("limitades")) {
      return "bg-orange-950/40 text-orange-400 border-orange-850/40";
    }
    let color = "";
    if (typeof colorDefinit === "string") {
      color = colorDefinit.toLowerCase().trim();
    } else if (colorDefinit && typeof colorDefinit === "object" && colorDefinit.hex) {
      color = colorDefinit.hex.toLowerCase();
    }
    if (color.includes("emerald") || color.includes("verd") || color === "green" || color.includes("10b981")) {
      return "bg-emerald-950/40 text-emerald-400 border-emerald-800/40";
    }
    if (color.includes("orange") || color.includes("taronja") || color.includes("f97316")) {
      return "bg-orange-950/40 text-orange-400 border-orange-800/40";
    }
    if (color.includes("amber") || color.includes("groc") || color === "yellow" || color.includes("f59e0b")) {
      return "bg-amber-950/40 text-amber-400 border-amber-800/40";
    }
    if (color.includes("blue") || color.includes("blau") || color.includes("3b82f6")) {
      return "bg-blue-950/40 text-blue-400 border-blue-800/40";
    }
    return "bg-slate-900/60 text-slate-300 border-slate-800";
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Activitats i Esdeveniments - AEB La Palma" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-14 relative z-10">  <section class="text-center max-w-3xl mx-auto pt-8 pb-12"> <span class="bg-amarilloClub text-azulOscuro uppercase tracking-wider text-xs font-black px-3 py-1 rounded-full shadow-sm">
Més enllà de la pista
</span> <h1 class="text-5xl lg:text-6xl font-black text-slate-50 mt-4 uppercase tracking-tight leading-none">
Les nostres <br> <span class="text-azulElectrico">Activitats Extra</span> </h1> <p class="text-lg mt-6 text-slate-400 max-w-xl mx-auto leading-relaxed">
A l'AEB La Palma no tot és la lliga regular. Organitzem esdeveniments esportius, casals de lleure i trobades socials per estrènyer llaços entre jugadors, famílies i tota la vila.
</p> </section>  <hr class="border-slate-800/80 my-8">  <section class="py-6"> ${activitats.length === 0 ? (
    /* 🔴 CORREGIT: Caixa de llista buida adaptada al fons fosc */
    renderTemplate`<div class="text-center py-12 bg-slate-900/50 rounded-3xl border border-slate-800"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-12 h-12 text-slate-500 mx-auto mb-4", "name": "uil:info-circle" })} <p class="text-slate-400 font-medium">No s'ha trobat cap activitat publicada al gestor de continguts.</p> </div>`
  ) : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${activitats.map((act) => {
    const destinacioRedireccio = act.ruta || (act.slug ? `/activitats/${act.slug}` : "#");
    const colorIconaClasses = obtenirColorIcona(act.icona);
    const classesEtiqueta = obtenirEstilEtiqueta(act.etiquetaColor, act.etiqueta);
    return (
      /* 🔴 CORREGIT: Caixes dels equips amb vores fosques border-slate-800/80 i efecte vidre fumat */
      renderTemplate`<div class="bg-slate-900/60 rounded-3xl border border-slate-800/80 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-700 transition duration-300 group relative overflow-hidden backdrop-blur-sm"> <div>  <div class="flex justify-between items-center mb-6"> <span class="text-xs font-bold text-slate-400 uppercase tracking-widest"> ${act.categoria || "Activitat"} </span> ${act.etiqueta && renderTemplate`<span${addAttribute(`text-xs font-bold px-3 py-1 rounded-full ${classesEtiqueta}`, "class")}> ${act.etiqueta} </span>`} </div>  <div class="flex items-center gap-4 mb-4"> <div${addAttribute(`p-3 rounded-2xl shrink-0 group-hover:scale-110 transition-transform duration-300 ${colorIconaClasses}`, "class")}> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-7 h-7", "name": act.icona || "uil:apps" })} </div> <h2 class="text-2xl font-black text-slate-50 uppercase tracking-tight leading-tight group-hover:text-amarilloClub transition duration-200"> ${act.titol} </h2> </div>  <p class="text-slate-400 text-sm leading-relaxed mb-8"> ${act.descripcio} </p> </div>   <div class="border-t border-slate-800/60 pt-6 mt-auto"> <a${addAttribute(destinacioRedireccio, "href")} class="inline-flex items-center gap-2 text-slate-50 hover:text-amarilloClub font-black text-sm uppercase tracking-wider transition duration-200">
Saber-ne més
${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200", "name": "uil:arrow-right" })} </a> </div> </div>`
    );
  })} </div>`} </section>  <section class="my-24 max-w-3xl mx-auto text-center"> <div class="bg-slate-900/80 text-white p-8 md:p-12 rounded-3xl border border-slate-800/80 shadow-xl relative overflow-hidden backdrop-blur-sm"> <div class="absolute -right-10 -bottom-10 text-slate-800/20"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-60 h-60", "name": "uil:basketball" })} </div> <div class="relative z-10"> <span class="text-amarilloClub font-black text-xs uppercase tracking-widest">
Vols col·laborar?
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-2">
Tens alguna <span class="text-amarilloClub">idea o proposta?</span> </h2> <p class="text-slate-300 mt-4 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
Som un club obert a tothom. Si ets un patrocinador, vols proposar una activitat o tens qualsevol dubte sobre els nostres esdeveniments, estem desitjant escoltar-te.
</p> <div class="mt-8 flex justify-center"> <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-azulElectrico hover:bg-azulOscuro text-white font-black px-8 py-4 rounded-2xl transition duration-200 shadow-lg"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "name": "uil:envelope" })}
Posa't en contacte amb nosaltres
</a> </div> </div> </div> </section> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/activitats/index.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/activitats/index.astro";
const $$url = "/activitats";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
