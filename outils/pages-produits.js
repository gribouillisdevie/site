// Génère une vraie page par produit (ex. bebe.html) à partir de outils/modele-produit.html,
// pour que Google voie un titre, une description et une adresse officielle propres à chaque produit.
// À relancer après chaque modification du catalogue :  node outils/pages-produits.js
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..');
const SITE = 'https://gribouillisdevie.fr';
const today = new Date().toISOString().slice(0, 10);

const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
for (const f of ['etsy-data.js', 'catalog.js']) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx);
const { P, CATS, ETSY, etsyImg } = ctx.window;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const strip = s => String(s).replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const tpl = fs.readFileSync(path.join(__dirname, 'modele-produit.html'), 'utf8');
const urls = [`${SITE}/`];

for (const p of P) {
  const lettre = p.cat === 'lettres';
  const c = CATS.find(x => x.id === p.cat), s = c.subs && c.subs.find(x => x.id === p.sub);
  const url = `${SITE}/${p.slug}.html`;
  const genre = p.livre ? "livre d'énigmes à imprimer" : lettre ? 'lettres à écrire' : (p.cat === 'voyage' ? 'affiche voyage' : 'affiche personnalisée');
  const title = `${cap(p.fr)} · ${genre} | Gribouillis de vie`;
  const suite = p.livre ? `Livre PDF à imprimer (${p.prix} €), solutions incluses.` : lettre
    ? `Lettres imprimées livrées en France (${p.pp} €) ou PDF à imprimer (${p.pd} €).`
    : 'Affiche A3 imprimée, livraison offerte en France (24 €), ou PDF à imprimer (10 €).';
  const desc = `${strip(p.dfr)} ${suite}`;
  const d = ETSY[p.papier] || ETSY[p.pdf];
  const img = d && d[1] && d[1][0] ? etsyImg(d[1][0], '794xN') : '';
  const img0 = img && !/^https?:/.test(img) ? `${SITE}/${img}` : img;
  const lead = (ETSY[p.papier] && ETSY[p.papier][0]) || p.dfr;

  const head = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(desc)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta property="og:type" content="product">`,
    `<meta property="og:site_name" content="Gribouillis de vie">`,
    `<meta property="og:title" content="${esc(cap(p.fr))}">`,
    `<meta property="og:description" content="${esc(desc)}">`,
    `<meta property="og:url" content="${url}">`,
    img0 ? `<meta property="og:image" content="${esc(img0)}">` : ''
  ].filter(Boolean).join('\n');

  // Contenu visible tout de suite (Google le lit sans attendre le script) ; le script le remplace ensuite.
  const statique = `<div class="info"><p class="tag">${esc(c.fr)}${s ? ' · ' + esc(s.fr) : ''}</p><h1>${esc(p.fr)}</h1><p class="lead">${esc(strip(lead))}</p></div>`;

  let html = tpl
    .replace('<title>Gribouillis de vie</title>', head)
    .replace('<div class="pgrid" id="pg"></div>', `<div class="pgrid" id="pg">${statique}</div>`)
    .replace("const slug=new URLSearchParams(location.search).get('p');", `const slug='${p.slug}';`)
    .replace("history.replaceState(null,'','?p='+p.slug+'&f='+fmt)", "history.replaceState(null,'','?f='+fmt)")
  if (!html.includes(`const slug='${p.slug}'`) || !html.includes('rel="canonical"')) throw new Error('Modèle modele-produit.html inattendu pour ' + p.slug);
  fs.writeFileSync(path.join(ROOT, `${p.slug}.html`), html);
  urls.push(url);
}

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => `  <url><loc>${u}</loc><lastmod>${today}</lastmod></url>`).join('\n') + '\n</urlset>\n');
console.log(`${P.length} pages produits créées, sitemap mis à jour.`);
