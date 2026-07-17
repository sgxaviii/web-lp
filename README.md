# 🏀 AEB La Palma - Lloc Web Oficial

Aquest és el repositori del lloc web oficial de l'**AEB La Palma** (Associació Esportiva Bàsquet La Palma de Cervelló). El projecte està dissenyat per ser extremadament ràpid, modern, totalment adaptat a dispositius mòbils i autogestionable a través d'un panell de control per a la gestió d'equips, partits i jugadors.

---

## 🚀 Tecnologies Utilitzades

- **Framework:** [Astro](https://astro.build/) (v4+) - Per a un rendiment òptic i generació estàtica (SSG).
- **Estils:** [Tailwind CSS](https://tailwindcss.com/) - Per a un disseny modern basat en utilitats i colors corporatius.
- **CMS (Gestor de Continguts):** [Sanity.io](https://www.sanity.io/) - Centralitza les dades dels equips, plantilles, horaris i resultats dels partits.
- **Icones:** `astro-icon` - Integració eficient d'icones SVG sense sobrecarregar la pàgina.
- **SEO:** `astro-seo` - Gestió de metadades, Open Graph i Twitter Cards per a cercadors i xarxes socials.
- **Desplegament:** [Vercel](https://vercel.com/) - Hosting d'alta velocitat optimitzat per a Astro.

---

## 📋 Prerequisits

Abans de començar, assegura't de tenir instal·lat al teu ordinador:
- [Node.js](https://nodejs.org/) (Versió 18.x o superior recomanada)
- **npm** (inclòs automàticament amb la instal·lació de Node.js)

---

## 🛠️ Instal·lació i Configuració

Segueix aquests passos per posar el projecte en marxa al teu entorn local:

### 1. Clonar el repositori
Si encara no ho has fet, clona el projecte a la teva màquina local:
```bash
git clone https://github.com/sgxaviii/web-lp
cd web-lp
```

### 2. Instal·lar els paquets de dependències

Executa la següent comanda per instal·lar tots els paquets i llibreries necessàries que utilitza el web:

```bash
npm install
```

### 📦 Detall dels paquets principals instal·lats:

La comanda anterior instal·larà automàticament les següents dependències clau definides al `package.json`:

* **`astro`**: El nucli del framework que gestiona les rutes i la generació de la web.
* **`@astrojs/tailwind`** i **`tailwindcss`**: Les eines de disseny per gestionar els estils globals i els colors corporatius de l'AEB.
* **`sanity`** i **`@sanity/image-url`**: Permeten la connexió directa amb el gestor de continguts i la transformació d'imatges en temps real.
* **`astro-seo`**: Un paquet indispensable que genera automàticament les etiquetes Meta, Open Graph i Twitter de cada pàgina per millorar el posicionament a Google.
* **`astro-icon`**: Component optimitzat per renderitzar icones SVG (com les fletxes i xarxes socials) directament en el codi sense alentir la càrrega.

### 3. Variables d'entorn (Connexió amb Sanity)

Crea un fitxer anomenat `.env` a l'arrel del projecte (si no existeix) i afegeix-hi les teves credencials de Sanity perquè el web pugui demanar les dades correctament:

```env
PUBLIC_SANITY_PROJECT_ID=el_teu_project_id
PUBLIC_SANITY_DATASET=production
```

---

## 💻 Execució en Local (Desenvolupament)

Per aixecar el servidor de desenvolupament local i veure el web en temps real mentre fas canvis, executa:

```bash
npm run dev
```

Un cop executat, obre el teu navegador i entra a:
👉 **[http://localhost:4321](http://localhost:4321)**

> 💡 **Nota sobre el funcionament:** El servidor compta amb **Hot Module Replacement (HMR)**. Això significa que qualsevol canvi que facis i desis als fitxers `.astro`, `.css` o `.js` es veurà reflectit a l'instant al navegador de forma automàtica, sense necessitat de reiniciar el terminal ni recarregar la pàgina manualment.

---

## 📦 Producció i Construcció (Build)

Quan hagis de preparar el web per pujar-lo a producció o vulguis comprovar que no hi hagi errors de compilació abans de fer un *push* cap a Vercel, utilitza aquestes comandes:

### Generar els fitxers estàtics

```bash
npm run build
```

Això compilarà tot el projecte i generarà una carpeta `dist/` amb codi HTML, CSS i JS pur, optimitzat per a la màxima velocitat de càrrega.

### Previsualitzar el resultat final

Si vols provar com funcionarà el web en entorn de producció abans de desplegar-lo oficialment:

```bash
npm run preview
```

---

## 📁 Estructura del Projecte

Breu resum de l'organització dels fitxers per entendre on va cada element:

```text
├── public/          # Fitxers estàtics de càrrega directa (favicons, fons-aeb.png, etc.)
├── src/
│   ├── assets/      # Imatges locals optimitzables automàticament per Astro
│   ├── components/  # Components reutilitzables (navbar, footer, targetes, CTA...)
│   ├── layouts/     # Plantilles de pàgina (Layout.astro amb el fons general i el bloc SEO)
│   ├── pages/       # Rutes del web (index.astro, /club, /equips/[slug].astro...)
│   └── styles/      # Estils globals (global.css i colors del club)
├── .env             # Variables de configuració privades (no es pugen a GitHub)
├── astro.config.mjs # Configuració d'Astro i les seves integracions oficials
└── package.json     # Llistat de paquets instal·lats i scripts d'execució
```

---

## 🤝 Contribucions i Suport

Si necessites modificar, afegir equips o actualitzar els horaris dels partits, recorda que ho pots gestionar directament des del panell de **Sanity Studio** sense necessitat de modificar el codi d'aquest repositori.

Per a qualsevol dubte tècnic amb l'estil o l'estructura de les pàgines d'Astro, revisa la carpeta `src/components/` o consulta la documentació oficial d'Astro.
