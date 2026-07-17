import { $ as $$Layout, b as $$Icon } from '../../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
export { renderers } from '../../renderers.mjs';

const $$Historia = createComponent(($$result, $$props, $$slots) => {
  const etapes = [
    {
      anys: "1992 - 1999",
      titol: "La Fundaci\xF3 i els Primers Bots",
      descripcio: "El club neix de la passi\xF3 d'un grup de mares i pares de La Palma que volien que els seus fills poguessin practicar el b\xE0squet sense sortir del poble. Amb m\xE9s il\xB7lusi\xF3 que recursos, les primeres cistelles es van penjar a la pista exterior de l'escola, jugant sota el sol i la pluja, per\xF2 assentant les bases d'una identitat indestructible.",
      imatge: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=800",
      alt: "Primers anys del club AEB La Palma"
    },
    {
      anys: "2000 - 2010",
      titol: "Creixement i l'Era del Pavell\xF3",
      descripcio: "Amb l'arribada del nou mil\xB7lenni i la inauguraci\xF3 del Pavell\xF3 Municipal, el club fait un salt de qualitat hist\xF2ric. Les seccions masculines i femenines es multipliquen, es consolida l'Escola de B\xE0squet i s'aconsegueixen els primers ascensos a categories preferents. Ens convertim en el motor esportiu del poble.",
      imatge: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=800",
      alt: "Entrenaments al Pavell\xF3 Municipal"
    },
    {
      anys: "2011 - 2020",
      titol: "Consolidaci\xF3 de la Pedrera",
      descripcio: "L'AEB La Palma es defineix clarament com un club de pedrera. Es crea la metodologia pr\xF2pia d'entrenament, apostant per la formaci\xF3 integral dels jugadors. El pavell\xF3 es comen\xE7a a omplir cada cap de setmana amb una afici\xF3 entregada, creant l'ambient de 'fam\xEDlia' que ens caracteritza avui dia.",
      imatge: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
      alt: "Afici\xF3 i grades plenes a La Palma"
    },
    {
      anys: "2021 - Present",
      titol: "Mirant al Futur sense Perdre l'ADN",
      descripcio: "Avui, amb m\xE8s equips federats que mai, des de l'Escola fins als s\xE8niors absoluts, encetem una etapa de modernitzaci\xF3. Digitalitzem el club, impulsem campus d'estiu internacionals i renovem els nostres equipaments, mantenint intacte el mateix comprom\xEDs i valors humans amb els quals vam comen\xE7ar fa m\xE9s de 30 anys.",
      imatge: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      alt: "Equip s\xE8nior actual de l'AEB La Palma"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "La nostra Hist\xF2ria - AEB La Palma" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section class="relative py-12 px-4 md:px-8 my-8 overflow-hidden"> <!-- Subtils llums de fons per donar relleu (opcionals, es barregen amb el teu fons de pantalla) --> <div class="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-azulElectrico/10 rounded-full blur-[150px] pointer-events-none"></div> <div class="absolute -bottom-40 left-20 w-96 h-96 bg-amarilloClub/5 rounded-full blur-[120px] pointer-events-none"></div> <div class="relative z-10 max-w-6xl mx-auto"> <!-- Capçalera --> <div class="text-center max-w-3xl mx-auto mb-24"> <span class="inline-block bg-slate-950/90 border border-slate-800 text-amarilloClub uppercase tracking-wider text-xs font-black px-4 py-1.5 rounded-full shadow-inner mb-4">
Més de 30 anys d'història
</span> <h1 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
EL NOSTRE CAMÍ, <br class="hidden sm:block"> <span class="text-azulElectrico">LA NOSTRA HISTÒRIA</span> </h1> <p class="text-lg mt-6 text-slate-300 leading-relaxed max-w-2xl mx-auto">
Des de les pistes de ciment de l'escola fins a competir arreu de Catalunya. Aquesta és la crònica d'un club humil que es va convertir en una gran família gràcies a l'esforç de tot un poble.
</p> </div> <!-- Línia del temps intercalada --> <div class="relative space-y-20 md:space-y-32 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-azulElectrico/60 before:via-slate-800 before:to-transparent"> ${etapes.map((etapa, index) => {
    const isEven = index % 2 === 0;
    const alignClass = isEven ? "md:text-right md:pr-8" : "md:text-left md:pl-8";
    const directionClass = isEven ? "" : "md:flex-row-reverse";
    return renderTemplate`<div${addAttribute(`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${directionClass}`, "class")}> <!-- Punt indicador del timeline --> <div class="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-950 border-4 border-azulElectrico rounded-full -translate-x-1/2 z-20 shadow-lg shadow-azulElectrico/30 flex items-center justify-center"> <div class="w-2 h-2 bg-amarilloClub rounded-full"></div> </div>  <div class="w-full md:w-1/2 pl-12 md:pl-0 text-left group"> <div${addAttribute(`bg-slate-950/80 backdrop-blur-md border border-slate-800/80 p-6 md:p-8 rounded-3xl hover:border-azulElectrico/50 transition-all duration-300 shadow-xl ${alignClass}`, "class")}> <span class="inline-block px-3 py-1 bg-azulElectrico/15 text-azulElectrico border border-azulElectrico/30 text-xs font-black rounded-lg uppercase tracking-wider mb-3 shadow-md"> ${etapa.anys} </span> <h3 class="text-xl md:text-2xl font-black text-white uppercase tracking-tight mt-1 group-hover:text-azulElectrico transition-colors duration-200"> ${etapa.titol} </h3> <p class="text-slate-300 mt-4 leading-relaxed text-sm md:text-base"> ${etapa.descripcio} </p> </div> </div>  <div class="w-full md:w-1/2 pl-12 md:pl-0"> <div class="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 transition-all duration-500 hover:border-azulElectrico/50 hover:shadow-azulElectrico/10 aspect-[4/3] md:aspect-[16/10]"> <img${addAttribute(etapa.imatge, "src")}${addAttribute(etapa.alt, "alt")} class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy"> </div> </div> </div>`;
  })} </div> <!-- Bloc final de crida a l'acció --> <div class="mt-32 text-center bg-slate-950/80 backdrop-blur-md border border-slate-800/80 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl"> ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-amarilloClub w-10 h-10 mx-auto mb-4 animate-pulse", "name": "uil:basketball" })} <h2 class="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
I LA HISTÒRIA CONTINUA... <span class="text-azulElectrico">AMB TU!</span> </h2> <p class="text-slate-300 mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
Cada triple, cada entrenament i cada crit d'ànim des de la grada forma part del proper capítol del club. Vols formar-ne part?
</p> <div class="mt-8"> <a href="/contact" class="inline-flex items-center gap-2 bg-azulElectrico hover:bg-azulOscuro text-white font-black px-8 py-4 rounded-2xl transition duration-200 shadow-lg shadow-azulElectrico/20 hover:scale-102">
Uneix-te a la Família
${renderComponent($$result2, "Icon", $$Icon, { "class": "w-5 h-5", "name": "uil:arrow-right" })} </a> </div> </div> </div> </section> ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/club/historia.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/club/historia.astro";
const $$url = "/club/historia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Historia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
