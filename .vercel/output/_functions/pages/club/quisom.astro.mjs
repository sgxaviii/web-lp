import { s as sanityClient, $ as $$Layout, a as $$Container } from '../../chunks/Layout_BLIPE-EI.mjs';
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as Fragment, h as addAttribute } from '../../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import { $ as $$Sectionhead } from '../../chunks/sectionhead_D_jxJ3f-.mjs';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../../renderers.mjs';

const $$Quisom = createComponent(async ($$result, $$props, $$slots) => {
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const membresSanity = await sanityClient.fetch(`*[_type == "membre"]{
  _id,
  name,
  title,
  role,
  avatar
}`);
  const direcciomembres = membresSanity.filter(
    (member) => member.role === "direccio"
  );
  const entrenadorsmembres = membresSanity.filter(
    (member) => member.role === "entrenador"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre nosaltres - AEB La Palma" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="mt-14 relative z-10"> ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": async ($$result5) => renderTemplate` <span class="text-slate-400 text-lg block mt-2">
Club Bàsquet AEB La Palma (La Palma de Cervelló)
</span> ` })}`, "title": async ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": async ($$result5) => renderTemplate` <span class="text-slate-50 uppercase tracking-tight font-black text-4xl md:text-5xl block">
Sobre nosaltres
</span> ` })}` })}  <div id="valors" class="flex flex-col gap-5 mx-auto max-w-4xl mt-16 bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-slate-800/80 shadow-xl scroll-mt-24"> <h2 class="font-black text-3xl text-slate-50 uppercase tracking-tight">
Formació en <span class="text-azulElectrico">valors</span> des de l'escola
</h2> <p class="text-base md:text-lg leading-relaxed text-slate-300">
Benvinguts al nostre club, un espai on el bàsquet és molt més que un joc: 
          és la nostra eina per formar persones. Des de la nostra fundació, 
          ens dediquem a cultivar el talent esportiu sense oblidar que el nostre principal
          objectiu és transmetre els valors fonamentals de l'esport. Creiem fermament que cada entrenament
          i cada partit són oportunitats úniques per aprendre el significat del treball en equip,
          el respecte mutu, la superació personal i el compromís.
</p> <p class="text-base md:text-lg leading-relaxed text-slate-300">
Aquí, cada jugador i jugadora, des de les categories d'iniciació fins als equips sènior,
          troba un entorn segur i motivador on créixer de manera integral.
          No mesurem el nostre èxit només en títols o marcadors, sinó en la unió de la nostra afició,
          l'esforç compartit a la pista i l'amistat que neix fora d'ella.
</p>  <p class="text-base md:text-lg leading-relaxed text-slate-200 font-semibold italic border-l-4 border-amarilloClub pl-4 bg-slate-950/40 p-4 rounded-r-2xl">
Som una gran família unida per la mateixa passió, on l'esportivitat, 
          la disciplina positiva i la inclusió són els nostres millors sistemes de joc. 
          Truquem a la teva porta per convidar-te a créixer, competir i gaudir amb nosaltres. 
          ¡Som club, som valors, som bàsquet!
</p> </div>  <div id="direccio" class="mt-24 scroll-mt-24"> <div class="text-center max-w-2xl mx-auto mb-12"> <h2 class="font-black text-3xl text-slate-50 uppercase tracking-tight">
La <span class="text-azulElectrico">Direcció</span> i Junta
</h2> <p class="text-slate-400 mt-3 text-sm md:text-base">
Les persones encarregades de la gestió institucional, la planificació estratègica i de vetllar perquè els valors de l'AEB La Palma es mantinguin ferms dia a dia.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto max-w-4xl justify-center"> ${direcciomembres.map((member) => {
    const imatgeUrl = member.avatar ? urlFor(member.avatar).width(400).height(400).fit("crop").url() : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop";
    return renderTemplate`<div class="group flex flex-col items-center">  <div class="w-full max-w-[240px] aspect-square overflow-hidden rounded-2xl border-2 border-slate-800/80 group-hover:border-azulElectrico group-hover:shadow-lg group-hover:shadow-azulElectrico/10 transition-all duration-300 bg-slate-900/40"> <img${addAttribute(imatgeUrl, "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100" loading="lazy"> </div> <div class="mt-4 text-center"> <h3 class="text-lg font-black text-slate-50 uppercase tracking-tight group-hover:text-azulElectrico transition-colors duration-200"> ${member.name} </h3>  <p class="text-[11px] font-black uppercase tracking-widest mt-1 text-amarilloClub"> ${member.title} </p> </div> </div>`;
  })} </div> </div>  <div id="entrenadors" class="mt-24 mb-32 scroll-mt-24"> <div class="text-center max-w-2xl mx-auto mb-12"> <h2 class="font-black text-3xl text-slate-50 uppercase tracking-tight">
Els nostres <span class="text-azulElectrico">Entrenadors</span> </h2> <p class="text-slate-400 mt-3 text-sm md:text-base">
El cor esportiu del club. Formadors i formadores que treballen directament a pista amb els nens, nenes i joves, transmetent tècnica, passió i disciplina positiva.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto max-w-4xl justify-center"> ${entrenadorsmembres.map((member) => {
    const imatgeUrl = member.avatar ? urlFor(member.avatar).width(400).height(400).fit("crop").url() : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&auto=format&fit=crop";
    return renderTemplate`<div class="group flex flex-col items-center">  <div class="w-full max-w-[240px] aspect-square overflow-hidden rounded-2xl border-2 border-slate-800/80 group-hover:border-azulElectrico group-hover:shadow-lg group-hover:shadow-azulElectrico/10 transition-all duration-300 bg-slate-900/40"> <img${addAttribute(imatgeUrl, "src")}${addAttribute(member.name, "alt")} class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 opacity-95 group-hover:opacity-100" loading="lazy"> </div> <div class="mt-4 text-center"> <h3 class="text-lg font-black text-slate-50 uppercase tracking-tight group-hover:text-azulElectrico transition-colors duration-200"> ${member.name} </h3>  <p class="text-[11px] font-black uppercase tracking-widest mt-1 text-amarilloClub"> ${member.title} </p> </div> </div>`;
  })} </div> </div> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/club/quisom.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/club/quisom.astro";
const $$url = "/club/quisom";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Quisom,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
