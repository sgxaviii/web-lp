import { b as $$Icon, s as sanityClient, $ as $$Layout, a as $$Container } from '../chunks/Layout_BLIPE-EI.mjs';
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, n as renderSlot, r as renderTemplate, k as renderComponent, o as renderScript } from '../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import 'clsx';
import imageUrlBuilder from '@sanity/image-url';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-slate-900/60  border-2 border-black hover:bg-gray-100 text-slate-50 ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-slate-900/60  text-slate-50   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/xmomplet/projectes/web-lp/src/components/ui/link.astro", void 0);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-2 border-amarilloClub/80 hover:border-amarilloClub p-8 md:px-20 md:py-16 mt-20 mx-auto max-w-5xl rounded-3xl flex flex-col items-center text-center shadow-2xl hover:shadow-amarilloClub/10 relative overflow-hidden group transition-all duration-500">  <div class="absolute -top-12 -right-12 w-64 h-64 bg-azulElectrico/10 rounded-full blur-3xl pointer-events-none group-hover:bg-azulElectrico/15 transition-colors duration-500"></div> <div class="absolute -bottom-12 -left-12 w-64 h-64 bg-amarilloClub/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amarilloClub/10 transition-colors duration-500"></div>  <h2 class="text-white text-3xl md:text-5xl font-black tracking-tight uppercase max-w-3xl leading-tight">
Vols vestir la nostra samarreta <span class="text-amarilloClub">la pròxima temporada?</span> </h2>  <p class="text-slate-300 mt-5 text-base md:text-lg max-w-2xl font-medium leading-relaxed">
Els nostres equips ja s'estan preparant i sempre busquem nous jugadors i jugadores amb ganes de gaudir d'aquest esport. Vine a provar un entrenament completament de franc i sense cap compromís!
</p>  <div class="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center items-center relative z-10">  ${renderComponent($$result, "Link", $$Link, { "href": "/contact", "style": "primary", "class": "w-full sm:w-auto px-8 py-3.5 bg-amarilloClub hover:bg-amarilloBrillante text-slate-950 font-black uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:shadow-amarilloClub/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 text-center text-sm" }, { "default": ($$result2) => renderTemplate`
📞 Contacta ara
` })}  ${renderComponent($$result, "Link", $$Link, { "href": "/equips", "style": "primary", "class": "w-full sm:w-auto px-8 py-3.5 bg-slate-950/40 hover:bg-azulElectrico/5 text-slate-300 hover:text-white font-bold rounded-xl border border-slate-800 hover:border-azulElectrico/50 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-azulElectrico/5 transition-all duration-300 text-center text-sm" }, { "default": ($$result2) => renderTemplate`
🏀 Veure horaris
` })} </div> </div>`;
}, "/home/xmomplet/projectes/web-lp/src/components/cta.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "ADN de Pedrera",
      description: "Des de l'Escola de B\xE0squet fins a competir en categories absolutes. Creiem en el talent de casa i en un cam\xED de creixement formatiu i hum\xE0 a llarg termini.",
      icon: "uil:basketball",
      link: "/equips"
    },
    {
      title: "Entrenadors Qualificats",
      description: "Comptem amb un cos t\xE8cnic titulat i comprom\xE8s que no nom\xE9s ensenya t\xE0ctica i t\xE8cnica, sin\xF3 que encomana la passi\xF3 pel b\xE0squet i el respecte mutu.",
      icon: "uil:thumbs-up",
      link: "/about#entrenadors"
    },
    {
      title: "Valors que fan Equip",
      description: "L'esfor\xE7, el comprom\xEDs, el respecte i la companyonia s\xF3n les nostres premisses innegociables. Guanyem junts, aprenem junts.",
      icon: "uil:fire",
      link: "/about#valors"
    },
    {
      title: "Instal\xB7lacions i Comunitat",
      description: "Entrenem i juguem al Pavell\xF3 Municipal amb l'equipament idoni i una afici\xF3 que omple les grades cada cap de setmana per emp\xE8nyer els nostres equips.",
      icon: "uil:building",
      link: "/equipaments"
    },
    {
      title: "Competici\xF3 per a Tothom",
      description: "Tinguis l'edat que tinguis o el teu nivell actual, tenim un espai dissenyat per a tu: des de trobades l\xFAdiques d'iniciaci\xF3 fins a lligues federades exigents.",
      icon: "uil:statistics",
      link: "/equips"
    },
    {
      title: "M\xE9s enll\xE0 dels 40 Minuts",
      description: "Organitzem campus d'estiu, tornejos especials, esdeveniments socials i activitats que fan que el club bategui durant tot l'any, m\xE9s enll\xE0 dels partits oficials.",
      icon: "uil:bolt",
      link: "/activitats"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-slate-950 rounded-[2.5rem] py-16 px-8 md:px-12 my-20 border border-slate-900 overflow-hidden shadow-2xl">  <div class="absolute -top-40 -right-40 w-96 h-96 bg-azulElectrico/10 rounded-full blur-[120px] pointer-events-none"></div> <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-amarilloClub/5 rounded-full blur-[120px] pointer-events-none"></div>  <div class="relative z-10">  <div class="max-w-2xl"> <h2 class="text-4xl lg:text-5xl font-black lg:tracking-tight uppercase text-white">
PER QUÈ EL NOSTRE CLUB ÉS <span class="text-azulElectrico">EL TEU LLOC</span>?
</h2> <p class="text-lg mt-4 text-slate-400">
A l'AEB La Palma entenem el bàsquet com una eina formativa. T'oferim un entorn saludable, competitiu i compromès on créixer com a esportista i com a persona.
</p> </div>  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-x-12 gap-y-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start group">  <a${addAttribute(item.link, "href")} class="mt-1 bg-slate-900/80 rounded-full w-11 h-11 flex items-center justify-center shrink-0 shadow-inner border border-slate-800/80 transition-all duration-300 group-hover:bg-azulElectrico group-hover:border-azulElectrico group-hover:scale-110"${addAttribute(`Anar a ${item.title}`, "aria-label")}> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-amarilloClub w-5 h-5 transition-colors duration-200 group-hover:text-white", "name": item.icon })} </a> <div>  <h3 class="font-bold text-white text-lg uppercase tracking-tight"> <a${addAttribute(item.link, "href")} class="hover:text-amarilloClub transition-colors duration-200 inline-flex items-center gap-1 group-hover:text-amarilloClub"> ${item.title} ${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-200 text-amarilloClub", "name": "uil:arrow-right" })} </a> </h3>  <p class="text-slate-400 mt-2 leading-relaxed text-sm"> ${item.description} </p> </div> </div>`)} </div> </div> </section>`;
}, "/home/xmomplet/projectes/web-lp/src/components/features.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"> <div class="py-6 md:order-1 hidden md:block"> <img src="/logo.jpg" alt="Escut oficial AEB La Palma" class="w-full max-w-[600px] h-auto object-contain" loading="eager"> </div> <div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-black lg:tracking-tight xl:tracking-tighter text-slate-50 uppercase">
AEB LA PALMA: més que un club, una <span class="text-azulElectrico">família</span> a la pista
</h1> <p class="text-lg mt-4 text-slate-300 max-w-xl">
A l'AEB La Palma vivim el bàsquet des de la base fins al sènior. Formem esportistes, compartim valors i competim amb el cor a cada partit. Uneix-te al <span class="text-amarilloClub font-bold">groc</span>-i-<span class="text-azulElectrico font-bold">blau</span>!
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3">  ${renderComponent($$result, "Link", $$Link, { "href": "/equips", "class": "flex gap-2 items-center justify-center bg-azulElectrico hover:bg-azulOscuro text-white font-bold px-6 py-3 rounded-xl transition duration-200 shadow-md border border-azulElectrico/20", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "class": "text-white w-5 h-5", "name": "uil:basketball" })}
Equips
` })}  <a href="/club" class="flex gap-2 items-center justify-center border-2 border-slate-700 hover:border-blue-400 bg-slate-900/40 text-slate-300 hover:text-blue-400 font-bold px-6 py-3 rounded-xl transition duration-200"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-4 h-4", "name": "uil:dna" })}
Club
</a> </div> </div> </main>`;
}, "/home/xmomplet/projectes/web-lp/src/components/hero.astro", void 0);

const $$Logos = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-24"> <h2 class="text-center text-slate-400 uppercase tracking-wider text-sm font-bold">Troba'ns a les xarxes socials</h2> <div class="flex gap-8 md:gap-16 items-center justify-center mt-10 flex-wrap text-slate-400"> <!-- Instagram --> <a href="https://www.instagram.com/aeblapalma" target="_blank" rel="noopener noreferrer" class="hover:text-pink-500 transition-all duration-200 hover:scale-110 block" title="Instagram"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "uil:instagram" })} </a> <!-- Facebook --> <a href="https://www.facebook.com/AEBLaPalma" target="_blank" rel="noopener noreferrer" class="hover:text-blue-600 transition-all duration-200 hover:scale-110 block" title="Facebook"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "uil:facebook-f" })} </a> <!-- WhatsApp --> <a href="https://wa.me/34644279680" target="_blank" rel="noopener noreferrer" class="hover:text-green-500 transition-all duration-200 hover:scale-110 block" title="WhatsApp"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "uil:whatsapp" })} </a> <!-- TikTok (Substituït el placeholder de uil:bolt) --> <a href="https://www.tiktok.com/@aeblapalma" target="_blank" rel="noopener noreferrer" class="hover:text-red-500 transition-all duration-200 hover:scale-110 block" title="TikTok"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "uil:bolt" })} </a> <a href="https://x.com/aeblapalma" target="_blank" rel="noopener noreferrer" class="hover:text-blue-300 transition-all duration-200 hover:scale-110 block" title="X"> ${renderComponent($$result, "Icon", $$Icon, { "class": "size-8 md:size-12", "name": "uil:twitter" })} </a> </div> </div>`;
}, "/home/xmomplet/projectes/web-lp/src/components/logos.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Patrocinadors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Patrocinadors;
  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }
  const { patrocinadors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-24"> <h2 class="text-center text-slate-400 uppercase tracking-wider text-sm font-bold">
Col·laboren amb el club
</h2> <div class="flex gap-8 md:gap-16 items-center justify-center mt-10 flex-wrap px-4"> ${patrocinadors.map((patro) => {
    const content = renderTemplate`<img${addAttribute(urlFor(patro.logo).width(240).height(120).fit("max").url(), "src")}${addAttribute(`Logo de ${patro.nom}`, "alt")} class="h-10 md:h-14 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0" loading="lazy">`;
    return patro.link ? renderTemplate`<a${addAttribute(patro.link, "href")} target="_blank" rel="noopener noreferrer" class="hover:scale-110 transition-transform duration-200 block"${addAttribute(patro.nom, "title")}> ${content} </a>` : renderTemplate`<div class="title={patro.nom}">${content}</div>`;
  })} </div> </div>`;
}, "/home/xmomplet/projectes/web-lp/src/components/patrocinadors.astro", void 0);

const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  let fotos = [];
  try {
    fotos = await sanityClient.fetch(
      `*[_type == "fotoGaleria"] | order(ordre asc, _createdAt desc) [0..4] {
      titol,
      "url": imatge.asset->url,
      peuDeFoto
    }`
    );
  } catch (error) {
    console.error("Error carregant les fotos de Sanity:", error);
  }
  const fotosFallback = [
    {
      titol: "Entrenament de l'infantil mascul\xED",
      url: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=800",
      peuDeFoto: "La base: on comen\xE7a tot"
    },
    {
      titol: "Celebraci\xF3 a la pista",
      url: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?auto=format&fit=crop&q=80&w=800",
      peuDeFoto: "Fent pinya despr\xE9s de la vict\xF2ria"
    },
    {
      titol: "La grada plena de gom a gom",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
      peuDeFoto: "L'afici\xF3 que mai ens falla"
    },
    {
      titol: "Equip s\xE8nior en acci\xF3",
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800",
      peuDeFoto: "Passi\xF3 i car\xE0cter a la pista"
    },
    {
      titol: "Valors del club",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800",
      peuDeFoto: "Companyerisme davant de tot"
    }
  ];
  const galeria = fotos.length > 0 ? fotos : fotosFallback;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-slate-950 rounded-[2.5rem] py-16 px-8 md:px-12 my-20 border border-slate-900 overflow-hidden shadow-2xl">  <div class="absolute -top-40 -left-40 w-96 h-96 bg-azulElectrico/10 rounded-full blur-[120px] pointer-events-none"></div> <div class="absolute -bottom-40 -right-40 w-96 h-96 bg-amarilloClub/5 rounded-full blur-[120px] pointer-events-none"></div> <div class="relative z-10">  <div class="max-w-3xl mx-auto text-center mb-12"> <span class="inline-block bg-slate-900 border border-slate-800 text-azulElectrico uppercase tracking-wider text-xs font-black px-4 py-1.5 rounded-full shadow-inner">
Som club, som batec
</span> <h2 class="text-4xl lg:text-5xl font-black text-white mt-4 uppercase tracking-tight">
Moments que fan <span class="text-azulElectrico">Família</span> </h2> <p class="text-lg mt-4 text-slate-400 leading-relaxed">
Fes clic a qualsevol imatge per veure-la en gran i descarregar-la directament al teu dispositiu.
</p> </div>  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 auto-rows-[220px]"> ${galeria.map((foto, index) => {
    let gridClass = "md:col-span-4";
    if (index === 0) gridClass = "md:col-span-8 md:row-span-2";
    if (index === 1) gridClass = "md:col-span-4 md:row-span-2";
    if (index === 3) gridClass = "md:col-span-6";
    if (index === 4) gridClass = "md:col-span-6";
    return renderTemplate`<button type="button"${addAttribute(`${gridClass} galeria-item relative w-full h-full text-left rounded-3xl overflow-hidden group shadow-md hover:shadow-azulElectrico/10 hover:shadow-2xl transition-all duration-300 bg-slate-900 border border-slate-800/80 cursor-pointer focus:outline-none focus:ring-4 focus:ring-azulElectrico/30 hover:border-azulElectrico/50`, "class")}${addAttribute(foto.url, "data-url")}${addAttribute(foto.titol, "data-title")}> <img${addAttribute(foto.url, "src")}${addAttribute(foto.titol, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100" loading="lazy">  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"> <p class="text-white font-black text-lg uppercase tracking-tight translate-y-3 group-hover:translate-y-0 transition-transform duration-300"> ${foto.titol} </p> <div class="flex items-center justify-between mt-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75"> <span class="text-amarilloClub text-xs font-bold uppercase tracking-wider"> ${foto.peuDeFoto || "Veure i descarregar"} </span> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white w-7 h-7 bg-azulElectrico p-1.5 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300", "name": "uil:search-plus" })} </div> </div> </button>`;
  })} </div> </div> </section>  <div id="visor-modal" class="fixed inset-0 bg-slate-950/98 z-50 flex flex-col items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300 backdrop-blur-sm" role="dialog" aria-modal="true">  <button id="tancar-modal" class="absolute top-6 right-6 text-white/80 hover:text-white cursor-pointer transition p-3 bg-slate-900/60 /5 border border-white/10 rounded-full hover:bg-slate-900/60 /15" aria-label="Tancar visor"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-6 h-6", "name": "uil:times" })} </button>  <div class="max-w-4xl max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-slate-800 shadow-2xl shadow-azulElectrico/5"> <img id="modal-img" src="" alt="" class="max-w-full max-h-[70vh] object-contain"> </div>  <div class="text-center mt-6 max-w-xl"> <h3 id="modal-titol" class="text-white font-black text-xl md:text-2xl uppercase tracking-tight"></h3> <div class="mt-4 flex flex-col sm:flex-row gap-3 justify-center">  <button id="boto-descarregar" class="inline-flex items-center justify-center gap-2 bg-azulElectrico hover:bg-azulElectrico/90 text-white font-black px-6 py-3 rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-azulElectrico/20 active:scale-95"> ${renderComponent($$result, "Icon", $$Icon, { "class": "w-5 h-5", "name": "uil:import" })}
Descarregar Foto
</button>  <button id="boto-tancar-secundari" class="inline-flex items-center justify-center gap-2 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-300 hover:text-white font-black px-6 py-3 rounded-xl transition duration-200 cursor-pointer">
Tancar
</button> </div> </div> </div>  ${renderScript($$result, "/home/xmomplet/projectes/web-lp/src/components/gallery.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/xmomplet/projectes/web-lp/src/components/gallery.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const patrocinadors = await sanityClient.fetch(`*[_type == "patrocinador"]{ nom, logo, link }`);
  const configuracioWeb = await sanityClient.fetch(`
  *[_type == "configuracio"][0]{
    "imatge_fons": imatge_fons.asset->url
  }
`);
  const fonsDePantalla = configuracioWeb?.imatge_fons || "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1920&auto=format&fit=crop";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AEB La Palma - M\xE9s que un club, una fam\xEDlia", "bgImage": fonsDePantalla }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Gallery", $$Gallery, {})} ${renderComponent($$result3, "Cta", $$Cta, {})} ${renderComponent($$result3, "Logos", $$Logos, {})} ${patrocinadors && patrocinadors.length > 0 && renderTemplate`${renderComponent($$result3, "PatrocinadorsLogos", $$Patrocinadors, { "patrocinadors": patrocinadors })}`}` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/index.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
