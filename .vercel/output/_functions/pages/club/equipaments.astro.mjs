import { $ as $$Layout, a as $$Container, b as $$Icon } from '../../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
export { renderers } from '../../renderers.mjs';

const $$Equipaments = createComponent(($$result, $$props, $$slots) => {
  const equipaments = [
    {
      id: "pista",
      // 👈 Abans: "pavello"
      titol: "Pavell\xF3 Cobert Multiesportiu",
      descripcio: "La pista central del nostre club, dissenyada per acollir competicions oficials i entrenaments diaris. Un espai polivalent de parquet d'alta qualitat que garanteix el m\xE0xim rendiment.",
      detalls: [
        "Porteries reglament\xE0ries de futbol sala i handbol.",
        "Canastes de b\xE0squet de sostre amb sistema hidr\xE0ulic.",
        "Postes i xarxa de voleibol de regulaci\xF3 ol\xEDmpica.",
        "Marcador electr\xF2nic de control de temps i faltes."
      ],
      imatge: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=800&auto=format&fit=crop",
      alt: "Pista central del pavell\xF3 cobert"
    },
    {
      id: "fitness",
      titol: "Sala de Fitness i Musculaci\xF3",
      descripcio: "Un espai completament equipat amb maquin\xE0ria d'\xFAltima generaci\xF3 per a la millora de la condici\xF3 f\xEDsica, el travail de for\xE7a, flexibilitat i cardio.",
      detalls: [
        "Zona de Cardio: cintes, el\xB7l\xEDptiques i simuladors de rem.",
        "Zona de For\xE7a: m\xE0quines de politges guiades de gamma alta.",
        "Zona de Pes Lliure: joc de manuelles complet fins a 40 kg.",
        "Zona d'estiraments amb espatlleres de fusta i fitballs."
      ],
      imatge: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
      alt: "Maquin\xE0ria de la sala de musculaci\xF3 i fitness"
    },
    {
      id: "piscina",
      // 👈 Abans: "piscines"
      titol: "Piscines i \xC0rea d'Aigua",
      descripcio: "Instal\xB7lacions aqu\xE0tiques climatitzades perfectes tant per a la pr\xE0ctica lliure com per als cursos d'aprenentatge infantil o exercicis de recuperaci\xF3.",
      detalls: [
        "Piscina Climatitzada Principal de 25 metres amb 6 carrils.",
        "Piscina d'Iniciaci\xF3 de menor profunditat per a infants.",
        "Material d'entrenament: taules, aletes i pull-buoys.",
        "Espai totalment adaptat per a persones amb mobilitat redu\xEFda."
      ],
      imatge: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop",
      alt: "Piscina climatitzada per a entrenaments i nataci\xF3"
    },
    {
      id: "sales-dirigides",
      titol: "Sales d'Activitats Dirigides",
      descripcio: "Sales polivalents climatitzades, amb s\xF2l de parquet flotant i miralls per a totes les activitats grupals del nostre club esportiu.",
      detalls: [
        "Sala d'Spinning equipada amb 25 bicicletes magn\xE8tiques.",
        "Sistema de so d'alta definici\xF3 i il\xB7luminaci\xF3 din\xE0mica.",
        "Sala Polivalent per a ioga, pilates i entrenament funcional.",
        "Material col\xB7lectiu variat: steps, manuelles lleugeres i gomes."
      ],
      imatge: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop",
      alt: "Sala d'activitats col\xB7lectives amb material esportiu"
    },
    {
      id: "pistes-exteriors",
      titol: "Pistes Exteriors",
      descripcio: "Per als qui prefereixen gaudir de la pr\xE0ctica de l'esport a l'aire lliure, el nostre poliesportiu disposa d'unes pistes completament condicionades.",
      detalls: [
        "4 pistes de p\xE0del de gespa artificial i tancaments de vidre.",
        "3 pistes de tennis (2 de terra batuda i 1 de resina r\xE0pida).",
        "Pista d'atletisme exterior amb anell regulador de 400 metres.",
        "Pou i passad\xEDs de sorra homologat per a salt de llargada."
      ],
      imatge: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop",
      alt: "Pistes exteriors de p\xE0del i tennis"
    },
    {
      id: "vestidors",
      titol: "Vestidors i Serveis Generals",
      descripcio: "La cura del soci comen\xE7a des del moment de canviar-se. Comptem amb serveis c\xF2modes, amplis i totalment higienitzats di\xE0riament.",
      detalls: [
        "Vestidors col\xB7lectius, individuals i familiars adaptats.",
        "Taquilles de seguretat d'\xFAs diari de franc.",
        "Espai cardioprotegit amb desfibril\xB7lador extern autom\xE0tic (DEA).",
        "\xC0rea social de recepci\xF3, punt d'atenci\xF3 i bar-cafeteria."
      ],
      imatge: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop",
      alt: "Instal\xB7lacions de vestidors del club"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Equipaments i Instal\xB7lacions - AEB La Palma" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-14 relative z-10">  <section class="text-center max-w-3xl mx-auto pt-8 pb-12"> <span class="bg-amarilloClub text-azulOscuro uppercase tracking-wider text-xs font-black px-3 py-1 rounded-full shadow-sm">
El nostre Club • Les nostres instal·lacions
</span> <h1 class="text-5xl lg:text-6xl font-black text-slate-50 mt-4 uppercase tracking-tight leading-none">
Equipaments del <br> <span class="text-azulElectrico">Poliesportiu</span> </h1>  <p class="text-lg mt-6 text-slate-300 max-w-xl mx-auto leading-relaxed">
Descobreix unes instal·lacions dissenyades per a donar el millor servei als nostres esportistes i socis. Espais amplis, moderns i adaptats a cada disciplina.
</p> </section>  <hr class="border-slate-800/80 my-8">  <section class="py-12 space-y-20 lg:space-y-32"> ${equipaments.map((equip, index) => renderTemplate`<div${addAttribute(equip.id, "id")}${addAttribute(`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`, "class")}>  <div${addAttribute(`relative ${index % 2 === 1 ? "lg:order-last" : ""}`, "class")}> <div class="absolute -inset-1.5 bg-gradient-to-r from-azulElectrico to-amarilloClub rounded-3xl blur opacity-25"></div>  <img${addAttribute(equip.imatge, "src")}${addAttribute(equip.alt, "alt")} class="relative w-full h-[300px] md:h-[400px] object-cover rounded-3xl border border-slate-800/80 shadow-2xl"> </div>  <div class="space-y-6">  <span class="bg-slate-950/80 text-amarilloClub border border-slate-800/80 uppercase tracking-widest text-xs font-black px-3 py-1.5 rounded-full">
Instal·lació ${index + 1} </span> <h2 class="text-3xl lg:text-4xl font-black text-slate-50 uppercase leading-tight"> ${equip.titol} </h2>  <p class="text-slate-300 leading-relaxed text-base"> ${equip.descripcio} </p>   <div class="pt-4 border-t border-slate-800/80"> <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
L'equipament inclou:
</h3> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3"> ${equip.detalls.map((detall) => (
    /* 🔴 CORREGIT: El text de cada detall s'ha aclarit a text-slate-300 */
    renderTemplate`<li class="flex items-start text-sm text-slate-300">  <div class="bg-azulElectrico/15 text-azulElectrico p-1 rounded-lg mr-3 mt-0.5 shrink-0 border border-azulElectrico/25"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4", "name": "uil:check" })} </div> <span>${detall}</span> </li>`
  ))} </ul> </div> </div> </div>`)}  <div id="sales-acollida" class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center scroll-mt-24 border-2 border-dashed border-slate-800/80 p-8 rounded-3xl bg-slate-950/40">  <div class="relative"> <div class="absolute -inset-1.5 bg-slate-800 rounded-3xl blur opacity-15"></div> <div class="relative w-full h-[300px] md:h-[400px] bg-slate-950/60 rounded-3xl flex flex-col items-center justify-center border border-slate-800"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-16 h-16 text-slate-600 mb-2", "name": "uil:image-v" })} <p class="text-xs text-slate-500 font-mono">ID de l'ancoratge: #sales-acollida</p> </div> </div>  <div class="space-y-6">  <span class="bg-amber-950/40 text-amber-400 border border-amber-800/40 uppercase tracking-widest text-xs font-bold px-3 py-1 rounded-full">
🚨 Espai temporal (Placeholder)
</span> <h2 class="text-3xl lg:text-4xl font-black text-slate-500 uppercase leading-tight">
Sales d'Acollida i Lleure
</h2> <p class="text-slate-400 leading-relaxed text-base">
Aquest espai està reservat per a descriure les nostres futures àrees d'acollida de matí/tarda, ludoteca o sales de reunions familiars i de l'AMPA.
</p>  <div class="pt-4 border-t border-slate-800/80"> <h3 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
Serveis previstos:
</h3> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-400"> <li class="flex items-center text-sm"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-4 h-4 mr-2 text-slate-500", "name": "uil:clock" })} Properament disponible
</li> </ul> </div> </div> </div>  </section>  <section class="my-24 max-w-3xl mx-auto text-center">  <div class="bg-slate-950/80 backdrop-blur-md text-white p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden"> <div class="absolute -right-10 -bottom-10 text-slate-900/40"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-60 h-60", "name": "uil:basketball" })} </div> <div class="relative z-10"> <span class="text-amarilloClub font-black text-xs uppercase tracking-widest">
Vols venir a entrenar?
</span> <h2 class="text-3xl lg:text-4xl font-black text-white uppercase mt-2">
Vine a conèixer les <span class="text-amarilloClub">instal·lacions</span> </h2> <p class="text-slate-300 mt-4 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
Estem a la teva disposició per a fer una visita guiada o resoldre qualsevol dubte sobre l'ús de les nostres pistes de joc o quotes de soci.
</p> <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" class="inline-flex items-center justify-center gap-2 bg-azulElectrico hover:bg-azulOscuro text-white font-black px-8 py-4 rounded-2xl transition duration-200 shadow-lg hover:shadow-azulElectrico/25"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "w-5 h-5", "name": "uil:envelope" })}
Contactar ara
</a> </div> </div> </div> </section> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/club/equipaments.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/club/equipaments.astro";
const $$url = "/club/equipaments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Equipaments,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
