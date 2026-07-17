import { $ as $$Layout, a as $$Container, b as $$Icon } from '../chunks/Layout_BLIPE-EI.mjs';
import { e as createAstro, f as createComponent, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, n as renderSlot, r as renderTemplate, k as renderComponent, l as Fragment } from '../chunks/astro/server_BknYMl1Y.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                   */
import { $ as $$Sectionhead } from '../chunks/sectionhead_D_jxJ3f-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    size = "md",
    style = "primary",
    block,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    md: "px-5 py-2.5",
    lg: "px-6 py-3"
  };
  const styles = {
    outline: "border-2 border-black hover:bg-black text-slate-50 hover:text-white",
    primary: "bg-black text-white hover:bg-slate-900  border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<button${spreadAttributes(rest)}${addAttribute([
    "rounded-sm text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/xmomplet/projectes/web-lp/src/components/ui/button.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contactform = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate data-astro-cid-uwnxe3i2> <input type="hidden" name="access_key" value="3f81fd19-0787-4354-b21f-10bf9dcb7648" data-astro-cid-uwnxe3i2> <input type="checkbox" class="hidden" style="display:none" name="botcheck" data-astro-cid-uwnxe3i2>  <div class="mb-5" data-astro-cid-uwnxe3i2> <input type="text" placeholder="Nom complet" required class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" name="name" data-astro-cid-uwnxe3i2> <div class="empty-feedback invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix el teu nom complet.\n</div> </div>  <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="email_address" class="sr-only" data-astro-cid-uwnxe3i2>Correu electr\xF2nic</label> <input id="email_address" type="email" placeholder="Correu electr\xF2nic" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix la teva adre\xE7a de correu electr\xF2nic.\n</div> <div class="invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix una adre\xE7a v\xE0lida.\n</div> </div>  <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="phone_number" class="sr-only" data-astro-cid-uwnxe3i2>N\xFAmero de tel\xE8fon</label> <input id="phone_number" type="tel" placeholder="Tel\xE8fon (Ex: +34 600 000 000)" name="phone" required pattern="^(?:+34|0034|34)?[6789]d{8}$" class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix el teu n\xFAmero de tel\xE8fon.\n</div> <div class="invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nIntrodueix un tel\xE8fon espanyol v\xE0lid de 9 d\xEDgits (amb o sense prefix +34).\n</div> </div>  <div class="mb-3" data-astro-cid-uwnxe3i2> <textarea name="message" required placeholder="El teu missatge" class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden h-36 focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" data-astro-cid-uwnxe3i2></textarea> <div class="empty-feedback invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix el teu missatge.\n</div> </div>  <div class="relative group" data-astro-cid-uwnxe3i2> ', ` </div>  <div id="result" class="mt-4 text-center font-bold text-sm" data-astro-cid-uwnxe3i2></div> </form>  <script>
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    
    // Eliminem espais del tel\xE8fon abans d'enviar per si l'usuari n'ha posat (Ex: +34 600 00 00 00 -> +34600000000)
    const phoneInput = form.querySelector("#phone_number");
    if (phoneInput) {
      phoneInput.value = phoneInput.value.replace(/\\s+/g, '');
    }

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.style.display = "block";
    result.className = "mt-4 text-center font-bold text-sm text-amarilloClub";
    result.innerHTML = "Enviant missatge...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.className = "mt-4 text-center font-bold text-sm text-green-500";
          result.innerHTML = "Missatge enviat correctament!";
        } else {
          console.log(response);
          result.className = "mt-4 text-center font-bold text-sm text-red-650";
          result.innerHTML = json.message || "Hi ha hagut un error.";
        }
      })
      .catch((error) => {
        console.log(error);
        result.className = "mt-4 text-center font-bold text-sm text-red-650";
        result.innerHTML = "Alguna cosa ha anat malament!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
<\/script>`], ["", '<form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate data-astro-cid-uwnxe3i2> <input type="hidden" name="access_key" value="3f81fd19-0787-4354-b21f-10bf9dcb7648" data-astro-cid-uwnxe3i2> <input type="checkbox" class="hidden" style="display:none" name="botcheck" data-astro-cid-uwnxe3i2>  <div class="mb-5" data-astro-cid-uwnxe3i2> <input type="text" placeholder="Nom complet" required class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" name="name" data-astro-cid-uwnxe3i2> <div class="empty-feedback invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix el teu nom complet.\n</div> </div>  <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="email_address" class="sr-only" data-astro-cid-uwnxe3i2>Correu electr\xF2nic</label> <input id="email_address" type="email" placeholder="Correu electr\xF2nic" name="email" required class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix la teva adre\xE7a de correu electr\xF2nic.\n</div> <div class="invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix una adre\xE7a v\xE0lida.\n</div> </div>  <div class="mb-5" data-astro-cid-uwnxe3i2> <label for="phone_number" class="sr-only" data-astro-cid-uwnxe3i2>N\xFAmero de tel\xE8fon</label> <input id="phone_number" type="tel" placeholder="Tel\xE8fon (Ex: +34 600 000 000)" name="phone" required pattern="^(?:\\+34|0034|34)?[6789]\\d{8}$" class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" data-astro-cid-uwnxe3i2> <div class="empty-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix el teu n\xFAmero de tel\xE8fon.\n</div> <div class="invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nIntrodueix un tel\xE8fon espanyol v\xE0lid de 9 d\xEDgits (amb o sense prefix +34).\n</div> </div>  <div class="mb-3" data-astro-cid-uwnxe3i2> <textarea name="message" required placeholder="El teu missatge" class="w-full px-4 py-3 border-2 placeholder:text-slate-400 rounded-md outline-hidden h-36 focus:ring-4 border-gray-300 focus:border-azulElectrico ring-azulElectrico/20 transition duration-200" data-astro-cid-uwnxe3i2></textarea> <div class="empty-feedback invalid-feedback text-red-650 text-sm mt-1 font-medium" data-astro-cid-uwnxe3i2>\nSi us plau, introdueix el teu missatge.\n</div> </div>  <div class="relative group" data-astro-cid-uwnxe3i2> ', ` </div>  <div id="result" class="mt-4 text-center font-bold text-sm" data-astro-cid-uwnxe3i2></div> </form>  <script>
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    
    // Eliminem espais del tel\xE8fon abans d'enviar per si l'usuari n'ha posat (Ex: +34 600 00 00 00 -> +34600000000)
    const phoneInput = form.querySelector("#phone_number");
    if (phoneInput) {
      phoneInput.value = phoneInput.value.replace(/\\\\s+/g, '');
    }

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.style.display = "block";
    result.className = "mt-4 text-center font-bold text-sm text-amarilloClub";
    result.innerHTML = "Enviant missatge...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.className = "mt-4 text-center font-bold text-sm text-green-500";
          result.innerHTML = "Missatge enviat correctament!";
        } else {
          console.log(response);
          result.className = "mt-4 text-center font-bold text-sm text-red-650";
          result.innerHTML = json.message || "Hi ha hagut un error.";
        }
      })
      .catch((error) => {
        console.log(error);
        result.className = "mt-4 text-center font-bold text-sm text-red-650";
        result.innerHTML = "Alguna cosa ha anat malament!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Button", $$Button, { "type": "submit", "size": "lg", "block": true, "class": "bg-azulElectrico hover:bg-azulOscuro text-white font-bold py-3 px-6 rounded-md shadow-md transition duration-200", "data-astro-cid-uwnxe3i2": true }, { "default": async ($$result2) => renderTemplate`
Envia
` }));
}, "/home/xmomplet/projectes/web-lp/src/components/contactform.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Sectionhead", $$Sectionhead, {}, { "desc": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "desc" }, { "default": ($$result5) => renderTemplate`Estem aquí per ajudar-te.` })}`, "title": ($$result4) => renderTemplate`${renderComponent($$result4, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result5) => renderTemplate`CONTACTE` })}` })} ${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16"> <div> <h2 class="font-medium text-2xl text-slate-300">Contacta amb nosaltres</h2> <p class="text-lg leading-relaxed text-slate-400 mt-3">
Tens cap dubte? Contacta amb nosaltres fent servir aquest formulari o escriu-nos a les nostres xarxes socials.
</p> <div class="mt-5 space-y-2"> <a href="https://www.google.com/maps/search/?api=1&query=Carrer+del+Canigo%2C+9%2C+08756+La+Palma+de+Cervello%2C+Barcelona%2C+Spain" target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-400 hover:text-blue-600 transition-colors"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4 shrink-0 mr-2", "name": "uil:map-marker" })} <span>Carrer del Canigó, 9, 08756 La Palma de Cervelló</span> </a> <div class="flex items-center text-slate-400"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4 mr-2", "name": "uil:envelope" })} <a href="mailto:sgxaviii@gmail.com" class="hover:text-red-600 transition-colors">sgxaviii@gmail.com</a> </div> <div class="flex items-center text-slate-400"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4 mr-2", "name": "uil:whatsapp" })} <a href="https://wa.me/34644279680" class="hover:text-green-600 transition-colors">+34 644 27 96 80</a> </div> <a href="https://www.instagram.com/aeblapalma/" target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-400 hover:text-pink-600 transition-colors"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4 shrink-0 mr-2", "name": "uil:instagram" })} <span>@aeblapalma</span> </a> <a href="https://www.facebook.com/AEBLaPalma/" target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-400 hover:text-blue-700 transition-colors"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4 shrink-0 mr-2", "name": "uil:facebook" })} <span>AEBLaPalma</span> </a> <a href="https://www.tiktok.com/@aeblapalma" target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-400 hover:text-red-500 transition-colors"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4 shrink-0 mr-2", "name": "uil:bolt" })} <span>@aeblapalma</span> </a> <a href="https://x.com/aeblapalma" target="_blank" rel="noopener noreferrer" class="flex items-center text-slate-400 hover:text-blue-300 transition-colors"> ${renderComponent($$result3, "Icon", $$Icon, { "class": "text-gray-400 w-4 h-4 shrink-0 mr-2", "name": "uil:twitter" })} <span>@aeblapalma</span> </a> </div> </div> <div> ${renderComponent($$result3, "Contactform", $$Contactform, {})} </div> </div> ` })} ` })}`;
}, "/home/xmomplet/projectes/web-lp/src/pages/contact.astro", void 0);

const $$file = "/home/xmomplet/projectes/web-lp/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
